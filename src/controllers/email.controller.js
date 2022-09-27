const emailService = require('../services/email.service')
// const { body, validationResult } = require('express-validator');
// const {ValidationError} = require('../utils/errors');


exports.getAllEmails = async (req, res) => {
    const allEmails = await emailService.getAllEmails();
    res.status(200).send(allEmails);
};

exports.getOneEmail = async (req, res) => {

    const {emailId} = req.params;
    const email = await emailService.getOneEmail(emailId);
    res.status(200).send(email);

};

exports.createNewEmail = async (req, res) => {
    const {body} = req;
    if (!body.mailboxId ||
        !body.templateId ||
        !body.to
    ) {

    }
    const newEmail = {
        mailboxId: body.mailboxId,
        templateId: body.templateId,
        to: body.to,
        cc: body.cc,
        bcc: body.bcc,
        reply_to: body.reply_to,
        sent_date: body.sent_date,
        date: body.date
    };
    const createEmail = await emailService.createNewEmail(newEmail);
    res.status(201).send(createEmail);
};

exports.updateOneEmail = async (req, res) => {
    const {emailId} = req.params;
    const updateEmail = await emailService.updateOneEmail({id: emailId, ...req.body});
    res.send(updateEmail);
};

exports.deleteOneEmail = async (req, res) => {
    const {emailId} = req.params;
    const deletedEmail = await emailService.deleteOneEmail(emailId);
    res.status(204).send({status: 'Deleted', deletedEmail});
};
