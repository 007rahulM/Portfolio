const isExitCodeTypeError = (error) =>
  error &&
  error.code === "ERR_INVALID_ARG_TYPE" &&
  typeof error.message === "string" &&
  error.message.includes('The "code" argument must be of type number');

const handleExitCodeError = (error) => {
  if (isExitCodeTypeError(error)) {
    process.exit(0);
  }

  throw error;
};

process.on("uncaughtException", handleExitCodeError);
process.on("unhandledRejection", handleExitCodeError);

const path = require("node:path");
const packageJsonPath = require.resolve("contentlayer/package.json");
const cliPath = path.join(path.dirname(packageJsonPath), "bin", "cli.cjs");

require(cliPath);
