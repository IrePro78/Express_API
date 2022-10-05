const express = require("express");
const templateController = require("../controllers/template.controller");
const Validator = require("../middlewares/validator");
const templateRouter = express.Router();
const uploader = require('../middlewares/uploader')



templateRouter.get("/", templateController.getAllTemplates);

templateRouter.get("/:templateId", templateController.getOneTemplate );

templateRouter.post("/", Validator('template'), uploader(), templateController.createNewTemplate);

templateRouter.patch("/:templateId", Validator('template'), uploader(), templateController.updateOneTemplate);

templateRouter.delete("/:templateId", templateController.deleteOneTemplate);

module.exports = templateRouter;
