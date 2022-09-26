const db = require('../models');
const Template = db.templates;


exports.getAllTemplates = () => {
    return Template.findAll();
}

exports.getOneTemplate = (templateId) => {
    return Template.findByPk(templateId);
}

exports.createNewTemplate = (newTemplate) => {
    return Template.create(newTemplate);
}

exports.updateOneTemplate = (obj) => {
    return Template.upsert(obj);
}

exports.deleteOneTemplate = (templateId) => {
    return Template.destroy({where: {id: templateId}});
}

