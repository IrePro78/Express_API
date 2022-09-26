const Mailbox = require('../database/mailbox.db');

exports.getAllMailboxes = () => {
    return Mailbox.getAllMailboxes();
};

exports.getOneMailbox = (mailboxId) => {
    return Mailbox.getOneMailbox(mailboxId);
};

exports.createNewMailbox = (newMailbox) => {
    return Mailbox.createNewMailbox(newMailbox);
};

exports.updateOneMailbox = (obj) => {
    return Mailbox.updateOneMailbox(obj);
};

exports.deleteOneMailbox = async (mailboxId) => {
    return await Mailbox.deleteOneMailbox(mailboxId);
};
