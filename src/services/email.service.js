const Email = require('../database/email.db');
const {ValidationError, NotFoundError} = require("../middlewares/errors");

exports.getAllEmails = async () => {
    return Email.getAllEmails();
};

exports.getOneEmail = async (emailId) => {
    const email = await Email.getOneEmail(emailId)
    console.log(email)
    if (!email) {
        throw new NotFoundError();
    }
    return email;
};

exports.createNewEmail = async (newEmail) => {
    const {mailboxId, templateId, to, cc, bcc} = newEmail;

    // if (mailboxId.length !== 36 || templateId.length !== 36) {
    //     throw new ValidationError('ID template or mailbox not correct')
    // }
    // for (const email of to) {
    //     if (!email || typeof email !== 'string' || !email.includes('@')) {
    //         throw new ValidationError('E-mail not correct')
    //     }
    // }
    return Email.createNewEmail(newEmail);
};

exports.updateOneEmail = async (obj) => {
    return Email.updateOneEmail(obj);
};

exports.deleteOneEmail = async (emailId) => {
    return Email.deleteOneEmail(emailId);
};

