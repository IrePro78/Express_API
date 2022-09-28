const db = require('../models');
const {NotFoundError, ValidationError} = require("../utils/errors");
const Email = db.emails;

exports.getAllEmails = async () => {
    return Email.findAll();
}

exports.getOneEmail = async (emailId) => {
    const email = await Email.findByPk(emailId, {
        include: [db.mailboxes, db.templates]
    });
    if (!email) {
        throw new NotFoundError();
    }
    return email;
}

exports.createNewEmail = async (newEmail) => {
    const {mailboxId, templateId, to, cc, bcc} = newEmail;
    const [toEmail]= to;
    // const [ccEmail]= cc;
    // const [bccEmail]= bcc;
    if (mailboxId.length !== 36 || templateId.length !== 36) {
        throw new ValidationError('ID template or mailbox not correct')
    }
    if (!toEmail || typeof toEmail !== 'string' || toEmail.indexOf('@') === -1) {
        throw new ValidationError('E-mail not correct')
    }
    return Email.create(newEmail);
}

exports.updateOneEmail = async (obj) => {
    return Email.upsert(obj);
}

exports.deleteOneEmail = async (emailId) => {
    return Email.destroy({where: {id: emailId}});
}

