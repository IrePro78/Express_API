const multer = require('multer');

module.exports = () => {
    const storage = multer.diskStorage({
        destination: 'src/attachments/',
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    });
    const upload = multer({storage: storage});
    return upload.array('attachment', 5)
};
