const db = require('../models');
const Email = db.emails;

exports.getAllEmails = async () => {
    return Email.findAll();
}

exports.getOneEmail = async (emailId) => {
    return Email.findByPk(emailId, {
        include: [db.mailboxes, db.templates]
    });
}

exports.createNewEmail = async (newEmail) => {
    return Email.create(newEmail);
}

exports.updateOneEmail = async (obj) => {
    return Email.upsert(obj);
}

exports.deleteOneEmail = async (emailId) => {
    return Email.destroy({where: {id: emailId}});
}

