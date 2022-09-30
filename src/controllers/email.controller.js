const emailService = require('../services/email.service')



exports.getAllEmails = async (req, res) => {
    const allEmails = await emailService.getAllEmails();
    res.status(200).send(allEmails);
};

exports.getOneEmail = async (req, res, next) => {
    try {
        const {emailId} = req.params;
        const email = await emailService.getOneEmail(emailId);
        res.status(200).send(email);
    } catch (err) {
        next(err);
    }
};

exports.createNewEmail = async (req, res, next) => {
    const {body} = req;

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
    try {
    const createEmail = await emailService.createNewEmail(newEmail);
    res.status(201).send(createEmail);
    } catch (err) {
        next(err);
    }
};

exports.updateOneEmail = async (req, res, next) => {
    try {
        const {emailId} = req.params;
        const updateEmail = await emailService.updateOneEmail({id: emailId, ...req.body});
        res.send(updateEmail);
    } catch (err) {
        next(err);
    }

};

exports.deleteOneEmail = async (req, res, next) => {
    try {
        const {emailId} = req.params;
        const deletedEmail = await emailService.deleteOneEmail(emailId);
        res.status(204).send({status: 'Deleted', deletedEmail});
    } catch (err) {
        next(err);
    }

};
