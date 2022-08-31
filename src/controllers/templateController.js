const templateService = require('../services/templateService');

exports.getAllTemplates = async (req, res) => {
    const allTemplates = await templateService.getAllTemplates()
    res.send(allTemplates);
};

exports.getOneTemplate = async (req, res) => {
    const template = await templateService.getOneTemplate(req, res);
    res.send(template);
};

exports.createNewTemplate = async (req, res) => {
    const createTemplate = await templateService.createNewTemplate(req, res);
    res.send(createTemplate);
};

exports.updateOneTemplate = async (req, res) => {
    const updateTemplate = await templateService.updateOneTemplate(req, res);
    res.send(updateTemplate);
};

exports.deleteOneTemplate = async (req, res) => {
    const deleteTemplate = await templateService.deleteOneTemplate(req, res);
    res.send(deleteTemplate);
};

