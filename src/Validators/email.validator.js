const Joi = require('joi');

const emailValidator = Joi.object({
    mailboxId: Joi.string().uuid({version: 'uuidv4'}),
    templateId: Joi.string().uuid({version: 'uuidv4'}),
    to: Joi.array().min(1).items(Joi.string().email().lowercase()),
    cc: Joi.array().items(Joi.string().email().lowercase().optional().empty('')),
    bcc: Joi.array().items(Joi.string().email().lowercase().optional().empty('')),
    reply_to: Joi.string().email().lowercase(),
});


module.exports = emailValidator;



