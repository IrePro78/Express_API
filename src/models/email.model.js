const {DataTypes, Sequelize} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("email", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            // mailboxId: {
            //     type: DataTypes.STRING,
            //     allowNull: false,
            // },
            // templateId: {
            //     type: DataTypes.STRING,
            //     allowNull: false,
            // },
            to: {
                type: DataTypes.JSON,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            cc: {
                type: DataTypes.JSON,
                validate: {
                    isEmail: true
                }
            },
            bcc: {
                type: DataTypes.JSON,
                validate: {
                    isEmail: true
                }
            },
            reply_to: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true
                }
            },
        },
        {
            timestamps: true,
            createdAt: 'date',
            updatedAt: 'sent_date',
        }
    );
};
