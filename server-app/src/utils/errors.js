export class HttpError extends Error {
  constructor(name, message, statusCode, data) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}
