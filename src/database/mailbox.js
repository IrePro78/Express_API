const DB = require('./db.json');

const getAllMailboxes = () => {
        return DB.mailboxes;
};
const getOneMailbox = () => {
        return DB.mailboxes;
}
const createNewMailbox = () => {
        return DB.mailboxes;
}
const updateOneMailbox = () => {
        return DB.mailboxes;
}
const deleteOneMailbox = () => {
        return DB.mailboxes;
}

module.exports =
    {
        getAllMailboxes,
        getOneMailbox,
        createNewMailbox,
        updateOneMailbox,
        deleteOneMailbox
    };
