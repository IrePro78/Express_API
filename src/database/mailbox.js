const DB = require('../models');
const Mailbox = DB.mailboxes;

exports.getAllMailboxes = () => {
        return Mailbox.findAll();

}
exports.getOneMailbox = (req, res) => {
        const {mailboxId} = req.params;
        return Mailbox.findByPk(mailboxId);

}
exports.createNewMailbox = (req, res) => {
        const mailbox = {
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
        return Mailbox.create(mailbox);
}
exports.updateOneMailbox = (req, res) => {
        const {mailboxId} = req.params;
        return Mailbox.upsert({id: mailboxId, ...req.body});

}
exports.deleteOneMailbox = (req, res) => {
        const {mailboxId} = req.params;
        return Mailbox.destroy({where: {id:mailboxId}});
}
