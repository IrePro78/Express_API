const Mailboxes = require('../database/mailbox');

exports.getAllMailboxes = () => {
    return Mailboxes.getAllMailboxes();
};

exports.getOneMailbox = (req, res) => {
    return Mailboxes.getOneMailbox(req, res);
};

exports.createNewMailbox = (req, res) => {
    return Mailboxes.createNewMailbox(req, res);
};

exports.updateOneMailbox = (req, res) => {
    return Mailboxes.updateOneMailbox(req, res);
};

exports.deleteOneMailbox = async (req, res) => {
    return await Mailboxes.deleteOneMailbox(req, res);
};
