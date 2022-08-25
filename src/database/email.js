const DB = require('./db.json');

const getAllEmails = () => DB.emails;

const getOneEmail = () => DB.emails;
const createNewEmail = () => DB.emails;
const updateOneEmail = () => DB.emails;
const deleteOneEmail = () => DB.emails;

module.exports =
    {
        getAllEmails,
        getOneEmail,
        createNewEmail,
        updateOneEmail,
        deleteOneEmail
    };
