
module.exports = (sequelize, DataTypes) => {
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
                type: DataTypes.JSON,
                allowNull: true,
                defaultValue: [],
            },
        },
        {
            timestamps: true,
            createdAt: 'date',
            updatedAt: 'last_update',
        }
    );
};
