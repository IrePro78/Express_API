const Templates = require('../database/template');

exports.getAllTemplates = () => {
    return Templates.getAllTemplates();
};

exports.getOneTemplate = (req, res) => {
    return Templates.getOneTemplate(req, res);
};

exports.createNewTemplate = (req, res) => {
    return Templates.createNewTemplate(req, res);
};

exports.updateOneTemplate = (req, res) => {
    return Templates.updateOneTemplate(req, res);
};

exports.deleteOneTemplate = async (req, res) => {
    return await Templates.deleteOneTemplate(req, res);
};
