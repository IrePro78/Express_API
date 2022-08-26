// const DB = require('../models');


const getAllEmails = () => {
    return {ok: DB.email};

}
// const getOneEmail = () => {
//         return DB.emails;
// }
// const createNewEmail = () => {
//         return DB.emails;
// }
// const updateOneEmail = () => {
//         return DB.emails;
// }
// const deleteOneEmail = () => {
//         return DB.emails;
// }

module.exports =
    {
        getAllEmails,
        // getOneEmail,
        // createNewEmail,
        // updateOneEmail,
        // deleteOneEmail
    };
