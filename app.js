const logger = require("./logger/my_logger");

logger.info("==== System start =======");

const x = 1;
logger.debug(`placing 1 into x. x = ${x}`);

function div(x, y) {
  logger.debug(`function -div- , parameters: ${x}, ${y}`);

  if (y == 0) {
    logger.error(`cannot divide by zero , parameters: ${x}, ${y}`);
    throw new Error("cannot divide by zero");
  }

  const result = x / y;
  logger.debug(`output = ${result}`);
  return result;
}

try {
  div(3, 0);
} catch {}

logger.info("==== System stop =======");
