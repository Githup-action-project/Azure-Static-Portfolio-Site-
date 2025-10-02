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
            body: { count: entity.count }
        };
    } catch (error) {
        if (error.statusCode === 404) {
            const newEntity = {
                partitionKey,
                rowKey,
                count: 1
            };
            await client.createEntity(newEntity);
            context.res = {
                status: 200,
                body: { count: 1 }
            };
        } else {
            context.res = {
                status: 500,
                body: { error: error.message }
            };
        }
    }
};
// explanation: The above code is a complete implementation of an Azure Function that counts visitors using Azure Table Storage.
module.exports = async function (context, req) {
  context.log("Visitor counter triggered");
  const visitorCount = Math.floor(Math.random() * 1000);
  context.res = {
    body: { count: visitorCount }
  };
};
