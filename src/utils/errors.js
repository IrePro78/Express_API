class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError'
    }
}

const handleError = (err, req, res, next) => {
    console.error(err);
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json('error', {
            message: err instanceof ValidationError ? err.message : 'Something went wrong, please try again.',
        });
};

module.exports = {
    handleError,
    ValidationError,
}
