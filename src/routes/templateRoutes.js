const express = require("express");
const templateController = require("../controllers/templateController");
const templateRouter = express.Router();

templateRouter.get("/", templateController.getAllTemplates);

templateRouter.get("/:mailboxId", templateController.getOneTemplate );

templateRouter.post("/", templateController.createNewTemplate);

templateRouter.patch("/:mailboxId", templateController.updateOneTemplate);

templateRouter.delete("/:mailboxId", templateController.deleteOneTemplate);

module.exports = templateRouter;
