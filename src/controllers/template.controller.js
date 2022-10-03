const templateService = require('../services/template.service');

exports.getAllTemplates = async (req, res, next) => {
    try {
        const allTemplates = await templateService.getAllTemplates()
        res.status(200).send(allTemplates);
    }
     catch (err) {
         next(err);
     }
};

exports.getOneTemplate = async (req, res, next) => {
    try {
        const {templateId} = req.params;
        const template = await templateService.getOneTemplate(templateId);
        res.send(template);
    } catch (err) {
        next(err);
    }
};

exports.createNewTemplate = async (req, res, next) => {
    const newTemplate = {
        subject: req.body.subject,
        text: req.body.text,
        attachment: req.body.attachment,
        date: req.body.date,
        last_update: req.body.last_update
    };
    try {
        const createTemplate = await templateService.createNewTemplate(newTemplate);
        res.status(201).send(createTemplate);
    } catch (err) {
        next(err);
    }
};

exports.updateOneTemplate = async (req, res, next) => {
    try {
        const {templateId} = req.params;
        const updateTemplate = await templateService.updateOneTemplate({id: templateId, ...req.body});
        res.send(updateTemplate);
    } catch (err) {
        next(err);
    }
};

exports.deleteOneTemplate = async (req, res, next) => {
    try {
        const {templateId} = req.params;
        const deleteTemplate = await templateService.deleteOneTemplate(templateId);
        res.status(204).send({status: 'Deleted', deleteTemplate});
    } catch (err) {
        next(err);
    }
};

