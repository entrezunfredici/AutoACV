class APIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.name = this.constructor.name
        this.statusCode = statusCode || 500
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = APIError