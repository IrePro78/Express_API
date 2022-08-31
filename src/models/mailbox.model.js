const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    const mailbox = sequelize.define("mailbox", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        host: {
            type: DataTypes.STRING
        },
        port: {
            type: DataTypes.INTEGER
        },
        login: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email_from: {
            type: DataTypes.STRING
        },
        use_ssl: {
            type: DataTypes.BOOLEAN
        },
        is_active: {
            type: DataTypes.BOOLEAN
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        last_update: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return mailbox;
};
