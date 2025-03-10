export const sendResponse = (res, status, message, data = null) => {
    console.log({ status, message });

    res.status(status).json({ status, message, data });
};

export const handleError = (error, res) => {
    const status = error.statusCode || 500;
    let message = error.message
    if (status === 500)
        message = "An error occurred while processing your request.";

    sendResponse(res, status, message, error.data || null);
    console.log(error);

};