class ValidationError extends Error {}

const handleError = (err, req, res, next) => {
    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .send('error', {
            message:  ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za kilka minut.',
        });
};

module.exports = {
    ValidationError,
    handleError
};
