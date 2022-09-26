const Template = require('../database/template.db');

exports.getAllTemplates = () => {
    return Template.getAllTemplates();
};

exports.getOneTemplate = (templateId) => {
    return Template.getOneTemplate(templateId);
};

exports.createNewTemplate = (newTemplate) => {
    return Template.createNewTemplate(newTemplate);
};

exports.updateOneTemplate = (obj) => {
    return Template.updateOneTemplate(obj);
};

exports.deleteOneTemplate = async (templateId) => {
    return await Template.deleteOneTemplate(templateId);
};
