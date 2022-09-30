const Email = require('../database/email.db');
const {NotFoundError} = require("../middlewares/errors");

exports.getAllEmails = async () => {
    return Email.getAllEmails();
};

exports.getOneEmail = async (emailId) => {
    const email = await Email.getOneEmail(emailId)
    if (!email) {
        throw new NotFoundError();
    }
    return email;
};

exports.createNewEmail = async (newEmail) => {
     return Email.createNewEmail(newEmail);
};

exports.updateOneEmail = async (obj) => {
    return Email.updateOneEmail(obj);
};

exports.deleteOneEmail = async (emailId) => {
    const email = await Email.deleteOneEmail(emailId);
    console.log(email)
    if (!email) {
        throw new NotFoundError();
    }
    return email;
};

