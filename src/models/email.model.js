
module.exports = (sequelize, Sequelize) => {
    const Email = sequelize.define("email", {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        mailbox: {
            type: Sequelize.STRING
        },
        template: {
            type: Sequelize.BOOLEAN
        },
        to: {
            type: Sequelize.STRING
        },
        cc: {
            type: Sequelize.STRING
        },
        bcc: {
            type: Sequelize.BOOLEAN
        },
        reply_to: {
            type: Sequelize.STRING
        },
        sent_date: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.BOOLEAN
        }
    });
    return Email;
};

