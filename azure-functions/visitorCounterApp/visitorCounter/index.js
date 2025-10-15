const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

module.exports = async function (context, req) {
  const accountName = process.env.STORAGE_ACCOUNT_NAME;
  const accountKey = process.env.STORAGE_ACCOUNT_KEY;
  const tableName = "VisitorStats";

  const credential = new AzureNamedKeyCredential(accountName, accountKey);
  const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);

  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.headers["x-client-ip"] || "unknown";
  const partitionKey = "visitor";
  const rowKey = ip;

  let totalVisitors = 0;
  let uniqueVisitors = 0;
  let lastVisit = null;

  try {
    // Calculate analytics
    const entities = client.listEntities();
    for await (const entity of entities) {
      totalVisitors += parseInt(entity.count || 1);
      uniqueVisitors += 1;
      if (!lastVisit || new Date(entity.timestamp) > new Date(lastVisit)) {
        lastVisit = entity.timestamp;
      }
    }

    // Update or create visitor record
    try {
      let entity = await client.getEntity(partitionKey, rowKey);
      entity.count = parseInt(entity.count) + 1;
      entity.timestamp = new Date().toISOString();
      await client.updateEntity(entity, "Replace");
    } catch (error) {
      if (error.statusCode === 404) {
        const newEntity = {
          partitionKey,
          rowKey,
          count: 1,
          timestamp: new Date().toISOString()
        };
        await client.createEntity(newEntity);
      }
    }

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        totalVisitors,
        uniqueVisitors,
        lastVisit
      }
    };
  } catch (error) {
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: { error: error.message }
    };
  }
};