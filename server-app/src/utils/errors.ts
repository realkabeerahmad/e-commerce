export class HttpError extends Error {
  statusCode: number;
  data: any;

  constructor(name: string, message: string, statusCode: number, data: any) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}
