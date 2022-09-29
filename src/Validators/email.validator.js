const Joi = require('joi');

const emailValidator = {
    createOrUpdateEmailValidator : {
        body: Joi.object({
            mailboxId: Joi.string().uuid({version: 'uuidv4'}),
            templateId: Joi.string().uuid({version: 'uuidv4'}),


            to: Joi.array().valid(Joi.string().email().lowercase().required()),

            cc: Joi.string().email().lowercase(),
            bcc: Joi.string().email().lowercase(),
            reply_to: Joi.string().email().lowercase(),
        })
    }
}

module.exports = emailValidator;



