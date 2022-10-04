const Joi = require('joi');

const templateValidator = Joi.object({
    subject: Joi.string(),
    text: Joi.string(),
    attachment: Joi.array().items(Joi.string()),
});


module.exports = templateValidator;
