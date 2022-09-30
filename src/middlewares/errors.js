import sequelizePackage from 'sequelize';

const { ValidationError, DatabaseError } = sequelizePackage;


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
        .status(err.status || 500)
        .json({error: err.status || 500,
            message: err.message
        });
};

module.exports = {
    handleError,
    NotFoundError,
}
