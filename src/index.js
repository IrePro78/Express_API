const express = require("express");
const bodyParser = require("body-parser");

const mailboxRouter = require('./routes/mailboxRoutes');
const emailRouter = require('./routes/emailRoutes');
const templateRouter = require('./routes/templateRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/mailboxes', mailboxRouter);
app.use('/api/emails', emailRouter);
app.use('/api/templates', templateRouter);

const db = require('./models');
db.sequelize.sync()
    .then(() => {
        console.log('Synced db.');
    })
    .catch((err) => {
        console.log('Failed to sync db' + err.meessage);
    })


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
