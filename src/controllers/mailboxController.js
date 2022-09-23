const mailboxService = require('../services/mailboxService');

exports.getAllMailboxes = async (req, res) => {
    const allMailboxes = await mailboxService.getAllMailboxes();
    res.send(allMailboxes);
};

exports.getOneMailbox = async (req, res) => {
    const mailbox = await mailboxService.getOneMailbox(req, res);
    res.send(mailbox);
};

exports.createNewMailbox = async (req, res) => {
    const createMailbox = await mailboxService.createNewMailbox(req, res);
    res.send(createMailbox);
};

exports.updateOneMailbox = async (req, res) => {
    const updateMailbox = await mailboxService.updateOneMailbox(req, res);
    res.send(updateMailbox);
};

exports.deleteOneMailbox = async (req, res) => {
    const deleteMailbox = await mailboxService.deleteOneMailbox(req, res);
    console.log(deleteMailbox)
    res.status(204).send(deleteMailbox);
};
