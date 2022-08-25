const Templates = require('../database/template');

const getAllTemplates = () => {
    return Templates.getAllTemplates();
};

const getOneTemplate = () => {
    return Templates.getOneTemplate();
};

const createNewTemplate = () => {
    return Templates.createNewTemplate();
};

const updateOneTemplate = () => {
    return Templates.updateOneTemplate();
};

const deleteOneTemplate = () => {
    return Templates.deleteOneTemplate();
};

module.exports = {
    getAllTemplates,
    getOneTemplate,
    createNewTemplate,
    updateOneTemplate,
    deleteOneTemplate,
}
