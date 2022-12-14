module.exports = (sequelize, DataTypes) => {
    return sequelize.define("email", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            to: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: [],
                validate: {
                    notEmpty: true,
                }
            },
            cc: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: [],
            },
            bcc: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: [],
            },
            reply_to: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isEmail: true,
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
