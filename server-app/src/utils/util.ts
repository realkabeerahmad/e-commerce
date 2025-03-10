import express from 'express'
export const sendResponse = (res: express.Response, status: number, message: String, data: any = null) => {
    console.log({ status, message });

    res.status(status).json({ status, message, data });
};

export const handleError = (error: any, res: express.Response) => {
    const status = error.statusCode || 500;
    let message = error.message
    if (status === 500)
        message = "An error occurred while processing your request.";

    sendResponse(res, status, message, error.data || null);
    console.log(error);

};