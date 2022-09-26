const templateService = require('../services/template.service');

exports.getAllTemplates = async (req, res) => {
    const allTemplates = await templateService.getAllTemplates()
    res.send(allTemplates);
};

exports.getOneTemplate = async (req, res) => {
    const {templateId} = req.params;
    const template = await templateService.getOneTemplate(templateId);
    res.send(template);
};

exports.createNewTemplate = async (req, res) => {
    const newTemplate = {
        subject: req.body.subject,
        text: req.body.text,
        attachment: req.body.attachment,
        date: req.body.date,
        last_update: req.body.last_update
    }
    const createTemplate = await templateService.createNewTemplate(newTemplate);
    res.send(createTemplate);
};

exports.updateOneTemplate = async (req, res) => {
    const {templateId} = req.params;
    const updateTemplate = await templateService.updateOneTemplate({id: templateId, ...req.body});
    res.send(updateTemplate);
};

exports.deleteOneTemplate =async (req, res) => {
    const {templateId} = req.params;
    const deleteTemplate = await templateService.deleteOneTemplate(templateId);
    console.log(deleteTemplate)
    res.status(204).send({status: 'Deleted', deleteTemplate});
};

