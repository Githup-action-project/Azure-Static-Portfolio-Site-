
const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

module.exports = async function (context, req) {
  try {
    const accountName = process.env.STORAGE_ACCOUNT_NAME;
    const accountKey = process.env.STORAGE_ACCOUNT_KEY;
    const tableName = "VisitorStats";

    if (!accountName || !accountKey) {
      context.res = {
        status: 500,
        headers: { "Content-Type": "application/json" },
        body: {
          error: "Missing STORAGE_ACCOUNT_NAME or STORAGE_ACCOUNT_KEY",
          accountName,
          accountKeyExists: !!accountKey
        }
      };
      return;
    }

    const credential = new AzureNamedKeyCredential(accountName, accountKey);
    const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);

    let entityCount = 0;
    try {
      const entities = client.listEntities();
      for await (const entity of entities) {
        entityCount++;
      }
    } catch (err) {
      context.res = {
        status: 500,
        headers: { "Content-Type": "application/json" },
        body: { error: "Failed to list entities", details: err.message }
      };
      return;
    }

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        message: "Function is working",
        STORAGE_ACCOUNT_NAME: accountName,
        entityCount
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
