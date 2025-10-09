const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

module.exports = async function (context, req) {
  const accountName = process.env.STORAGE_ACCOUNT_NAME;
  const accountKey = process.env.STORAGE_ACCOUNT_KEY;
  const tableName = "VisitorStats";

  const credential = new AzureNamedKeyCredential(accountName, accountKey);
  const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);

  const partitionKey = "visitor";
  const rowKey = "counter";

  try {
    let entity = await client.getEntity(partitionKey, rowKey);
    entity.count = parseInt(entity.count) + 1;
    await client.updateEntity(entity, "Replace");
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { count: entity.count }
    };
  } catch (error) {
    if (error.statusCode === 404) {
      const newEntity = { partitionKey, rowKey, count: 1 };
      await client.createEntity(newEntity);
      context.res = {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: { count: 1 }
      };
    } else {
      context.res = {
        status: 500,
        headers: { "Content-Type": "application/json" },
        body: { error: error.message }
      };
    }
  }
};