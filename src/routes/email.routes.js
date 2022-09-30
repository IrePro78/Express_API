const express = require("express");
const emailRouter = express.Router();
const emailController = require("../controllers/email.controller");
const Validator = require('../middlewares/validator')





emailRouter.get("/",emailController.getAllEmails);

emailRouter.get("/:emailId", emailController.getOneEmail);

emailRouter.post("/", Validator('email'),emailController.createNewEmail);

emailRouter.patch("/:emailId", Validator('email'), emailController.updateOneEmail);

emailRouter.delete("/:emailId", emailController.deleteOneEmail);

module.exports = emailRouter;

