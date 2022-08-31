const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    const email = sequelize.define("email", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        mailbox: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        template: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        to: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        cc: {
            type: DataTypes.JSON
        },
        bcc: {
            type: DataTypes.JSON
        },
        reply_to: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        sent_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW

        }
    });
    return email;
};
