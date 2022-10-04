
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("mailbox", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            host: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            port: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 465,

            },
            login: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            email_from: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                }
            },
            use_ssl: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,

            },
            is_active: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,

            },
        },
        {
            timestamps: true,
            createdAt: 'date',
            updatedAt: 'last_update',
        }
    );
};
