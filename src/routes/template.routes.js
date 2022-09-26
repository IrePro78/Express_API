const express = require("express");
const templateController = require("../controllers/template.controller");
const templateRouter = express.Router();

templateRouter.get("/", templateController.getAllTemplates);

templateRouter.get("/:templateId", templateController.getOneTemplate );

templateRouter.post("/", templateController.createNewTemplate);

templateRouter.patch("/:templateId", templateController.updateOneTemplate);

templateRouter.delete("/:templateId", templateController.deleteOneTemplate);

module.exports = templateRouter;
