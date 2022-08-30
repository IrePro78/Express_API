const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("email", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        mailbox: {
            type: DataTypes.STRING
        },
        template: {
            type: DataTypes.STRING
        },
        to: {
            type: DataTypes.STRING
        },
        cc: {
            type: DataTypes.STRING
        },
        bcc: {
            type: DataTypes.STRING
        },
        reply_to: {
            type: DataTypes.STRING
        },
        sent_date: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.STRING
        }
    });
};
