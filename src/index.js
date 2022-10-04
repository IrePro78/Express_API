const express = require("express");
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');
const { handleError } = require('./middlewares/errors');
const mailboxRouter = require('./routes/mailbox.routes');
const emailRouter = require('./routes/email.routes');
const templateRouter = require('./routes/template.routes');


const app = express();
const PORT = process.env.PORT || 3000;


dotenv.config({path: path.resolve(__dirname, '../.env')})


app.use(express.json());

app.use('/api/emails', emailRouter);
app.use('/api/mailboxes', mailboxRouter);
app.use('/api/templates', templateRouter);


app.use(handleError);


const db = require('./models');

db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});


db.sequelize.sync()
    .then(() => {
        console.log('Synced db.');
    })
    .catch((err) => {
        console.log('Failed to sync db' + err);
    })
//
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and resync db.');
//
// });

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
