const Joi = require('joi');

const mailboxValidator = Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    login: Joi.string().email().lowercase().required(),
    password: Joi.string().required(),
    email_from: Joi.string().email().lowercase().required(),
    use_ssl: Joi.bool().required(),
    is_active: Joi.bool(),
});


module.exports = mailboxValidator;
