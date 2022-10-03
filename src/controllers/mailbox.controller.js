const mailboxService = require('../services/mailbox.service');

exports.getAllMailboxes = async (req, res, next) => {
    try {
        const allMailboxes = await mailboxService.getAllMailboxes();
        res.status(200).send(allMailboxes);
    } catch (err) {
        next(err);
    }
};

exports.getOneMailbox = async (req, res, next) => {
    try {
        const {mailboxId} = req.params;
        const mailbox = await mailboxService.getOneMailbox(mailboxId);
        res.status(200).send(mailbox);
    } catch (err) {
        next(err);
    }
};

exports.createNewMailbox = async (req, res, next) => {
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
    };
    try {
        const createMailbox = await mailboxService.createNewMailbox(newMailbox);
        res.status(201).send(createMailbox);
    } catch (err) {
        next(err);
    }
};

exports.updateOneMailbox = async (req, res, next) => {
    try {
        const {mailboxId} = req.params;
        const updateMailbox = await mailboxService.updateOneMailbox({id: mailboxId, ...req.body});
        res.send(updateMailbox);
    } catch (err) {
        next(err);
    }
};

exports.deleteOneMailbox = async (req, res, next) => {
    try {
        const {mailboxId} = req.params;
        const deleteMailbox = await mailboxService.deleteOneMailbox(mailboxId);
        res.status(204).send({status: 'Deleted', deleteMailbox});
    } catch (err) {
        next(err);
    }
};
