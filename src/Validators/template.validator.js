const Joi = require('joi');

const templateValidator = Joi.object({
    subject: Joi.string().required(),
    text: Joi.string().required(),
    attachment: Joi.array().items(Joi.string()),
});
module.exports = templateValidator;
