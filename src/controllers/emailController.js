const emailService = require('../services/emailService')

exports.getAllEmails = async (req, res) => {
    const allEmails = await emailService.getAllEmails();
    res.send(allEmails);
};

exports.getOneEmail = async (req, res) => {
    const email = await emailService.getOneEmail(req, res);
    res.send(email);
};

exports.createNewEmail = async (req, res) => {
    const createEmail = await emailService.createNewEmail(req, res);
    res.send(createEmail);
};

exports.updateOneEmail = async (req, res) => {
    const updateEmail = await emailService.updateOneEmail(req, res);
    res.send(updateEmail);
};

exports.deleteOneEmail = async (req, res) => {
    const deletedEmail = await emailService.deleteOneEmail(req, res);
    console.log(deletedEmail)
    res.status(204).send({status: 'Deleted', deletedEmail});
    // res.send({ status: "OK", data: updatedWorkout });
};
