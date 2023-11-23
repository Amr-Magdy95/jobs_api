const { StatusCode } = require("http-status-codes");
const CustomAPIError = require("./customApi");

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCode.NOT_FOUND;
  }
}

module.exports = NotFoundError;
