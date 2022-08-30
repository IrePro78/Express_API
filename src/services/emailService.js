const Email = require('../database/email');

const getAllEmails = () => {
    return Email.getAllEmails();
};

const getOneEmail = (req, res) => {
    return Email.getOneEmail(req, res);
};

const createNewEmail = (req, res) => {
    return Email.createNewEmail(req, res);
};

const updateOneEmail = (req, res) => {
    return Email.updateOneEmail(req, res);
};

const deleteOneEmail = (req, res) => {
    return Email.deleteOneEmail(req, res);
};

module.exports = {
    getAllEmails,
    getOneEmail,
    createNewEmail,
    updateOneEmail,
    deleteOneEmail,
}
