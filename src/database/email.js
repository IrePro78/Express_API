const DB = require('../models');
const Email = DB.emails;

exports.getAllEmails = () => {
    return Email.findAll();

}
exports.getOneEmail = (req, res) => {
    const {emailId} = req.params;
    return Email.findByPk(emailId);

}
exports.createNewEmail = (req, res) => {
    const email = {
        mailbox: req.body.mailbox,
        template: req.body.template,
        to: req.body.to,
        cc: req.body.cc,
        bcc: req.body.bcc,
        reply_to: req.body.reply_to,
        sent_to: req.body.sent_to,
        date: req.body.date
    }
    return Email.create(email);
}
exports.updateOneEmail = (req, res) => {
    const {emailId} = req.params;
    return Email.upsert({id: emailId, ...req.body});

}
exports.deleteOneEmail = (req, res) => {
    const {emailId} = req.params;
    return Email.destroy({where: {id:emailId}});
}

