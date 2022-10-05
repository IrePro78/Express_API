const createHttpError = require('http-errors')
const Validators = require('../validators')

module.exports = (validator) => {
    if(!Validators.hasOwnProperty(validator))
        throw new Error(`'${validator}' validator is not exist`)
    return async (req, res, next) => {
        try {
            req.body = await Validators[validator].validateAsync(req.body)
            console.log(req)
            next()
        } catch (err) {
            if(err.isJoi)
                return next(createHttpError(422, {message: err.message}))
            next(createHttpError(500))
        }
    }
}
