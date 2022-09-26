const db = require('../models');
const Mailbox = db.mailboxes;

exports.getAllMailboxes = () => {
    return Mailbox.findAll();
}

exports.getOneMailbox = (mailboxId) => {
    return Mailbox.findByPk(mailboxId, {
        include: db.emails
    });
}

exports.createNewMailbox = (newMailbox) => {
    return Mailbox.create(newMailbox);
}

exports.updateOneMailbox = (obj) => {
    return Mailbox.upsert(obj);
}

exports.deleteOneMailbox = (mailboxId) => {
    return Mailbox.destroy({where: {id: mailboxId}});
}
