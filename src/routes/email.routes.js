const express = require("express");
const emailController = require("../controllers/email.controller");
const emailRouter = express.Router();




emailRouter.get("/", emailController.getAllEmails);

emailRouter.get("/:emailId", emailController.getOneEmail);

emailRouter.post("/", emailController.createNewEmail);

emailRouter.patch("/:emailId", emailController.updateOneEmail);

emailRouter.delete("/:emailId", emailController.deleteOneEmail);

module.exports = emailRouter;
