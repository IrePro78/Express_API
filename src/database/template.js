const DB = require('../models');
const Template = DB.templates;

exports.getAllTemplates = () => {
        return Template.findAll();

}
exports.getOneTemplate = (req, res) => {
        const {templateId} = req.params;
        return Template.findByPk(templateId);

}
exports.createNewTemplate = (req, res) => {
        const template = {
                subject: req.body.subject,
                text: req.body.text,
                attachment: req.body.attachment,
                date: req.body.date,
                last_update: req.body.last_update
        }
        return Template.create(template);
}
exports.updateOneTemplate = (req, res) => {
        const {templateId} = req.params;
        return Template.upsert({id: templateId, ...req.body});

}
exports.deleteOneTemplate = (req, res) => {
        const {templateId} = req.params;
        return Template.destroy({where: {id:templateId}});
}
