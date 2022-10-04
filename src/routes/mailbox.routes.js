const express = require("express");
const mailboxController = require("../controllers/mailbox.controller");
const mailboxRouter = express.Router();
const Validator = require('../middlewares/validator')


mailboxRouter.get("/", mailboxController.getAllMailboxes);

mailboxRouter.get("/:mailboxId", mailboxController.getOneMailbox);

mailboxRouter.post("/", Validator('mailbox'), mailboxController.createNewMailbox);

mailboxRouter.patch("/:mailboxId", Validator('mailbox'), mailboxController.updateOneMailbox);

mailboxRouter.delete("/:mailboxId", mailboxController.deleteOneMailbox);


module.exports = mailboxRouter;
