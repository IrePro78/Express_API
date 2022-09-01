const {DataTypes, Sequelize} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("template", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            subject: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            text: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            attachment: {
                type: DataTypes.STRING
            },
        },
        {
            timestamps: true,
            createdAt: 'date',
            updatedAt: 'sent_date',
        }
    );
};
