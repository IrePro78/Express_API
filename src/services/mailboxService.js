const Mailboxes = require('../database/mailbox');

const getAllMailboxes = () => {
    return Mailboxes.getAllMailboxes();
};

const getOneMailbox = () => {
    return Mailboxes.getOneMailbox();
};

const createNewMailbox = () => {
    return Mailboxes.createNewMailbox();
};

const updateOneMailbox = () => {
    return Mailboxes.updateOneMailbox();
};

const deleteOneMailbox = () => {
    return Mailboxes.deleteOneMailbox();
};

module.exports = {
    getAllMailboxes,
    getOneMailbox,
    createNewMailbox,
    updateOneMailbox,
    deleteOneMailbox,
}
