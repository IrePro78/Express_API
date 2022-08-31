const Email = require('../database/email');

exports.getAllEmails = () => {
    return Email.getAllEmails();
};

exports.getOneEmail = (req, res) => {
    return Email.getOneEmail(req, res);
};

exports.createNewEmail = (req, res) => {
    return Email.createNewEmail(req, res);
};

exports.updateOneEmail = (req, res) => {
    return Email.updateOneEmail(req, res);
};

exports.deleteOneEmail = (req, res) => {
    return Email.deleteOneEmail(req, res);
};

