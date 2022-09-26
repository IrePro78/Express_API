const Email = require('../database/email.db');

exports.getAllEmails = async() => {
    return Email.getAllEmails();
};

exports.getOneEmail = async (emailId) => {
    return Email.getOneEmail(emailId);
};

exports.createNewEmail = async (newEmail) => {
    return Email.createNewEmail(newEmail);
};

exports.updateOneEmail = async (obj) => {
    return Email.updateOneEmail(obj);
};

exports.deleteOneEmail = async (emailId) => {
    return Email.deleteOneEmail(emailId);
};

