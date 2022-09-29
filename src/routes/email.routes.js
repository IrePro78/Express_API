const express = require("express");
const emailRouter = express.Router();
const emailController = require("../controllers/email.controller");
// const EmailValidator = require("../Validators/email.validator");
// const { validate } = require('express-validation');
const Validator = require('../middlewares/validator')





emailRouter.get("/",emailController.getAllEmails);

emailRouter.get("/:emailId", emailController.getOneEmail);

emailRouter.post("/", Validator('email'),emailController.createNewEmail);

emailRouter.patch("/:emailId", emailController.updateOneEmail);

emailRouter.delete("/:emailId", emailController.deleteOneEmail);

module.exports = emailRouter;

