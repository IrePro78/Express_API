const express = require("express");
const templateController = require("../controllers/template.controller");
const Validator = require("../middlewares/validator");
const templateRouter = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'src/attachments/',
    filename: function ( req, file, cb ) {
        cb(null, file.originalname)
    }
});
const upload = multer({storage: storage})

templateRouter.get("/", templateController.getAllTemplates);

templateRouter.get("/:templateId", templateController.getOneTemplate );

templateRouter.post("/", Validator('template'), upload.array('attachment', 5), templateController.createNewTemplate);

templateRouter.patch("/:templateId", Validator('template'),templateController.updateOneTemplate);

templateRouter.delete("/:templateId", templateController.deleteOneTemplate);

module.exports = templateRouter;
