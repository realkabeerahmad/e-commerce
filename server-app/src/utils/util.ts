import express from "express";
import { ActivityModel } from "../model/activity";
export const sendResponse = async (
    res: express.Response,
    status: number,
    message: String,
    ip: String,
    service: String,
    startDtime: Date,
    data: any = null
) => {
    let endDtime: Date = new Date;
    let timeTaken: Number = endDtime.getTime() - startDtime.getTime();
    const Activity = {
        service: service,
        description: message,
        reqIp: ip,
        reqStartTime: startDtime,
        reqEndTime: endDtime,
        durationMs: timeTaken,
    };
    await ActivityModel.create(Activity);
    console.log(`Logging activity in DB`);
    console.log({ status, message });

    res.status(status).json({ status, message, data });
};

export const handleError = (error: any, res: express.Response) => {
    const status = error.statusCode || 500;
    let message = error.message;
    let ip = error.ip;
    let service = error.service;
    let startDtime = error.startDtime;
    if (status === 500)
        message = "An error occurred while processing your request.";

    sendResponse(
        res,
        status,
        message,
        ip,
        service,
        startDtime,
        error.data || null
    );
    console.log(error);
};
