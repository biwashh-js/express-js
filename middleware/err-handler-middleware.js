class customError extends Error{
    
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
        this.success = false;
        this.isOperational = true;
        Error.captureStackTrace(this,customError)
    }
}



export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message ?? 'internal server error',
        success: err.success ?? 'error',
        status: err.status ?? 'err',
        data:null
    })

}

export default customError