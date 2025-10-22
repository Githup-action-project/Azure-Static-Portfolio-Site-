
module.exports = async function (context, req) {
  context.log("Function started");

  try {
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { message: "Function is working" }
    };
  } catch (error) {
    context.log.error("Error:", error);
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: { error: error.message || "Unknown error" }
    };
  }
};
