const express = require("express");

const mailboxRouter = require('./routes/mailboxRoutes');
const emailRouter = require('./routes/emailRoutes');
const templateRouter = require('./routes/templateRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/mailboxes', mailboxRouter);
app.use('/api/emails', emailRouter);
app.use('/api/templates', templateRouter);



app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
