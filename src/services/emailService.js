const Email = require('../database/email')

const getAllEmails = () => {
    return Email.getAllEmails();
};

const getOneEmail = () => {
    return Email.getOneEmail();
};

const createNewEmail = () => {
    return Email.createNewEmail();
};

const updateOneEmail = () => {
    return Email.updateOneEmail();
};

const deleteOneEmail = () => {
    return Email.deleteOneEmail();
};

module.exports = {
    getAllEmails,
    getOneEmail,
    createNewEmail,
    updateOneEmail,
    deleteOneEmail,
}
