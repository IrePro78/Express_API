const mailboxService = require('../services/mailbox.service');

exports.getAllMailboxes = async (req, res) => {
    const allMailboxes = await mailboxService.getAllMailboxes();
    res.send(allMailboxes);
};

exports.getOneMailbox = async (req, res) => {
    const {mailboxId} = req.params;
    const mailbox = await mailboxService.getOneMailbox(mailboxId);
    res.send(mailbox);
};

exports.createNewMailbox = async (req, res) => {
    const newMailbox = {
        host: req.body.host,
        port: req.body.port,
        login: req.body.login,
        password: req.body.password,
        email_from: req.body.email_from,
        use_ssl: req.body.use_ssl,
        is_active: req.body.is_active,
        date: req.body.date,
        last_update: req.body.last_update
    }
    const createMailbox = await mailboxService.createNewMailbox(newMailbox);
    res.send(createMailbox);
};

exports.updateOneMailbox = async (req, res) => {
    const {mailboxId} = req.params;
    const updateMailbox = await mailboxService.updateOneMailbox({id: mailboxId, ...req.body});
    res.send(updateMailbox);
};

exports.deleteOneMailbox = async (req, res) => {
    const {mailboxId} = req.params;
    const deleteMailbox = await mailboxService.deleteOneMailbox(mailboxId);
    res.status(204).send(deleteMailbox);
};
