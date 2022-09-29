class ValidationError extends Error {
}

// class PropertyRequiredError extends ValidationError {
//
// }

class NotFoundError extends Error {
}

const handleError = (err, req, res, next) => {
    console.error(err);

    if (err instanceof NotFoundError) {
        res
            .status(404)
            .json({
                error: true,
                message: err.message || 'Selected ID doesnt exist.'
            })
        return;
    }
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json({error: true,
            message: err instanceof ValidationError ? err.message : 'Something went wrong, please try again.',
        });
};

module.exports = {
    handleError,
    ValidationError,
    NotFoundError,
}
