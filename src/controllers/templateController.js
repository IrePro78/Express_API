const templateService = require('../services/templateService');

const getAllTemplates = (req, res) => {
    const allTemplates = templateService.getAllTemplates()
    res.send(allTemplates);
};

const getOneTemplate = (req, res) => {
    res.send("Get an existing template");
};

const createNewTemplate = (req, res) => {
    res.send("Create a new template");
};

const updateOneTemplate = (req, res) => {
    res.send("Update an existing template");
};

const deleteOneTemplate = (req, res) => {
    res.send("Delete an existing template");
};

module.exports = {
    getAllTemplates,
    getOneTemplate,
    createNewTemplate,
    updateOneTemplate,
    deleteOneTemplate,
};
