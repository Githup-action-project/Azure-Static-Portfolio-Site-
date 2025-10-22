// visitorCounter/index.js
const { TableServiceClient } = require("@azure/data-tables");

module.exports = async function (context, req) {
  try {
    // 1) Use the Functions standard connection string
    const conn = process.env.AzureWebJobsStorage;
    if (!conn) {
      throw new Error("Missing AzureWebJobsStorage app setting.");
    }

    const tableName = "VisitorStats";
    const service = TableServiceClient.fromConnectionString(conn);
    const client = service.getTableClient(tableName);

    // 2) Ensure table exists (ignore 'already exists')
    try {
      await service.createTable(tableName);
    } catch (e) {
      if (!(e.statusCode === 409 || (e.details && e.details.errorCode === "TableAlreadyExists"))) {
        throw e;
      }
    }

    // 3) Determine IP (best-effort)
    const ip =
      (req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.headers["x-client-ip"] ||
        req.headers["x-appservice-clientip"] ||
        req.headers["x-original-forwarded-for"] ||
        req.headers["cf-connecting-ip"] ||
        "unknown")
        .toString()
        .trim();

    const partitionKey = "visitor";
    const rowKey = ip;

    // 4) Aggregate analytics (O(n) scan; fine for small tables)
    let totalVisitors = 0;
    let uniqueVisitors = 0;
    let lastVisit = null;

    for await (const entity of client.listEntities()) {
      const count = Number.parseInt(entity.count ?? "1", 10);
      totalVisitors += Number.isNaN(count) ? 1 : count;
      uniqueVisitors += 1;

      // Use system-managed timestamp for "last seen"
      const ts = entity.timestamp ? new Date(entity.timestamp) : null;
      if (ts && (!lastVisit || ts > new Date(lastVisit))) {
        lastVisit = ts.toISOString();
      }
    }

    // 5) Upsert current visitor without touching reserved 'Timestamp'
    try {
      const existing = await client.getEntity(partitionKey, rowKey);
      const newCount = Number.parseInt(existing.count ?? "0", 10) + 1;

      await client.upsertEntity(
        { partitionKey, rowKey, count: newCount, lastVisit: new Date().toISOString() },
        "Merge"
      );
    } catch (inner) {
      if (inner.statusCode === 404) {
        await client.createEntity({
          partitionKey,
          rowKey,
          count: 1,
          lastVisit: new Date().toISOString()
        });
        uniqueVisitors += 1;
        totalVisitors += 1;
        lastVisit = lastVisit || new Date().toISOString();
      } else {
        throw inner;
      }
    }

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: { totalVisitors, uniqueVisitors, lastVisit }
    };
  } catch (error) {
    // Log full error on server; return succinct JSON to client
    context.log.error("Visitor counter failed:", error);
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: { error: error.message || "Internal Server Error" }
    };
  }
};
