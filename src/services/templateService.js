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

exports.deleteOneTemplate = (req, res) => {
    return Templates.deleteOneTemplate(req, res);
};
