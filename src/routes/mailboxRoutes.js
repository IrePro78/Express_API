const express = require("express");
const mailboxController = require("../controllers/mailboxController");
const mailboxRouter = express.Router();


mailboxRouter.get("/", mailboxController.getAllMailboxes);

mailboxRouter.get("/:mailboxId", mailboxController.getAllMailboxes);

mailboxRouter.post("/", mailboxController.createNewMailbox);

mailboxRouter.patch("/:mailboxId", mailboxController.updateOneMailbox);

mailboxRouter.delete("/:mailboxId", mailboxController.deleteOneMailbox);


module.exports = mailboxRouter;
