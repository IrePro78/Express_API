const getAllMailboxes = (req, res) => {
    res.send("Get all mailboxes");
};

const getOneMailbox = (req, res) => {
    res.send("Get an existing mailbox");
};

const createNewMailbox = (req, res) => {
    res.send("Create a new mailbox");
};

const updateOneMailbox = (req, res) => {
    res.send("Update an existing mailbox");
};

const deleteOneMailbox = (req, res) => {
    res.send("Delete an existing mailbox");
};

module.exports = {
    getAllMailboxes,
    getOneMailbox,
    createNewMailbox,
    updateOneMailbox,
    deleteOneMailbox,
};
