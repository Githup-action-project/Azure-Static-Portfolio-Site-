const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

const account = process.env.STORAGE_ACCOUNT_NAME;
const accountKey = process.env.STORAGE_ACCOUNT_KEY;
const tableName = "VistorStats";
const partitionKey = "counter";
const today = new Date().toISOString().split("T")[0]; // e.g. "2025-10-26"

const credential = new AzureNamedKeyCredential(account, accountKey);
const client = new TableClient(
  `https://${account}.table.core.windows.net`,
  tableName,
  credential
);

module.exports = async function (context, req) {
  context.log("VisitorCounter function triggered");

  // Extract IP address
 const ip = req.headers["x-forwarded-for"]?.split(",")[0] || "unknown";

  const rowKey = `${today}|${ip}`;

  try {
    await client.createTable(); // Ensure table exists

    let entity;
    try {
      entity = await client.getEntity(partitionKey, rowKey);
    } catch (err) {
      if (err.statusCode === 404) {
        entity = { partitionKey, rowKey, count: 0 };
        await client.createEntity(entity);
      } else {
        throw err;
      }
    }

    entity.count += 1;
    await client.updateEntity(entity, "Replace");

    // Count total visits and unique IPs for today
    const entities = client.listEntities({
      queryOptions: {
        filter: `PartitionKey eq '${partitionKey}' and RowKey ge '${today}' and RowKey lt '${today}z'`
      }
    });

    let totalVisits = 0;
    let uniqueIPs = 0;

    for await (const item of entities) {
      totalVisits += item.count;
      uniqueIPs += 1;
    }

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        date: today,
        ip,
        visitsFromThisIP: entity.count,
        totalVisits,
        uniqueIPs
      }
    };
  } catch (error) {
    context.log.error("Error updating visitor count:", error);
    context.res = {
      status: 500,
      body: { error: "Failed to update visitor count" }
    };
  }
};
