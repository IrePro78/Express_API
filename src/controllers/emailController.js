const emailService = require('../services/emailService')

const getAllEmails = async (req, res) => {
    const allEmails = await emailService.getAllEmails();
    res.send(allEmails);

};

const getOneEmail = async (req, res) => {
    const email = await emailService.getOneEmail(req, res);
    res.send(email);
};

const createNewEmail = async (req, res) => {
    const createEmail = await emailService.createNewEmail(req, res);
    res.send(createEmail);
};

const updateOneEmail = async (req, res) => {
    const updateEmail = await emailService.updateOneEmail(req, res);
    res.send(updateEmail);
};

const deleteOneEmail = (req, res) => {
    const deletedEmail = emailService.deleteOneEmail(req, res);
    res.status(204).send(deletedEmail);
};

module.exports = {
    getAllEmails,
    getOneEmail,
    createNewEmail,
    updateOneEmail,
    deleteOneEmail,
};
