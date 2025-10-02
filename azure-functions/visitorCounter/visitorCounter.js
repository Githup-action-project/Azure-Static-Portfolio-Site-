module.exports = async function (context, req) {
  context.log("Visitor counter triggered");
  const visitorCount = Math.floor(Math.random() * 1000);
  context.res = {
    body: { count: visitorCount }
  };
};