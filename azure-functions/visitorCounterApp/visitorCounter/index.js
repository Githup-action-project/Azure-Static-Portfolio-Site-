const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

module.exports = async function (context, req) {
  const accountName = process.env.STORAGE_ACCOUNT_NAME;
  const accountKey = process.env.STORAGE_ACCOUNT_KEY;
  const tableName = "VisitorStats";

  const credential = new AzureNamedKeyCredential(accountName, accountKey);
  const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);

  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || "unknown";
  const partitionKey = "visitor";
  const rowKey = ip;

   let totalVisitors = 0;
  let uniqueVisitors = new Set();
  let dailyStats = {};
  let geoStats = {};
  let lastVisit = null;

  try {
    // Get geo-location
    let geo = "unknown";
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/country_name/`);
      geo = await geoRes.text();
    } catch {
      geo = "unknown";
    }

    // Aggregate analytics
    const entities = client.listEntities();
    for await (const entity of entities) {
      totalVisitors += parseInt(entity.count || 1);
      uniqueVisitors.add(entity.rowKey);

      const date = entity.timestamp.split("T")[0];
      dailyStats[date] = (dailyStats[date] || 0) + 1;

      const country = entity.country || "unknown";
      geoStats[country] = (geoStats[country] || 0) + 1;

      if (!lastVisit || new Date(entity.timestamp) > new Date(lastVisit)) {
        lastVisit = entity.timestamp;
      }
    }

    // Update or create visitor record
    try {
      let entity = await client.getEntity(partitionKey, rowKey);
      entity.count = parseInt(entity.count) + 1;
      entity.timestamp = new Date().toISOString();
      entity.country = geo;
      await client.updateEntity(entity, "Replace");
    } catch (error) {
      if (error.statusCode === 404) {
        const newEntity = {
          partitionKey,
          rowKey,
          count: 1,
          timestamp: new Date().toISOString(),
          country: geo
        };
        await client.createEntity(newEntity);
      }
    }

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        totalVisitors,
        uniqueVisitors: uniqueVisitors.size,
        lastVisit,
        dailyStats: Object.entries(dailyStats).map(([date, visits]) => ({ date, visits })),
        geoStats: Object.entries(geoStats).map(([country, visits]) => ({ country, visits }))
      }
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: { error: error.message }
    };
  }
};