const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

module.exports = async function (context, req) {
  const accountName = process.env.STORAGE_ACCOUNT_NAME;
  const accountKey = process.env.STORAGE_ACCOUNT_KEY;
  const tableName = "ContactMessages";

  const credential = new AzureNamedKeyCredential(accountName, accountKey);
  const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    context.res = { status: 400, body: { error: "Missing fields" } };
    return;
  }

  const entity = {
    partitionKey: "contact",
    rowKey: `${Date.now()}`,
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  try {
    await client.createEntity(entity);
    context.res = { status: 200, body: { success: true } };
  } catch (error) {
    context.res = { status: 500, body: { error: error.message } };
  }
};