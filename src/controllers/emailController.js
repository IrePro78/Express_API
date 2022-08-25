const emailService = require('../services/emailService')


const getAllEmails = (req, res) => {
    const allEmails = emailService.getAllEmails();
    res.send("Get all emails");
};

const getOneEmail = (req, res) => {
    const email = emailService.getOneEmail();
    res.send("Get an existing email");
};

const createNewEmail = (req, res) => {
    const createEmail = emailService.createNewEmail();
    res.send("Create a new email");
};

const updateOneEmail = (req, res) => {
    const updateEmail = emailService.updateOneEmail();
    res.send("Update an existing email");
};

const deleteOneEmail = (req, res) => {
    emailService.deleteOneEmail();
    res.send("Delete an existing email");
};

module.exports = {
    getAllEmails,
    getOneEmail,
    createNewEmail,
    updateOneEmail,
    deleteOneEmail,
};
