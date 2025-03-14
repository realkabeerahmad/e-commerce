export class HttpError extends Error {
  statusCode: number;
  data: any;
  ip: string;
  service: string;
  startDtime: Date;
  constructor(name: string, message: string, statusCode: number, ip: string, service: string, startDtime: Date, data: any) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.data = data;
    this.ip = ip;
    this.service = service;
    this.startDtime = startDtime;
    Error.captureStackTrace(this, this.constructor);
  }
}
