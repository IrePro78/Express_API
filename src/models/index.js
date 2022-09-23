const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('expressAPI', 'user', 'user123', {
    // host: dbConfig.HOST,
    // port: dbConfig.port,
    // dialect: dbConfig.dialect,
    // connectionLimit: dbConfig.connectionLimit,
    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
    host: 'localhost',
    port: 3307,
    dialect: 'mariadb',
    // connectionLimit: dbConfig.connectionLimit,
    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
});
// console.log(dbConfig)
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.emails = require('./email.model.js')(sequelize, Sequelize,);
db.mailboxes = require('./mailbox.model.js')(sequelize, Sequelize,);
db.templates = require('./template.model.js')(sequelize, Sequelize,);




db.emails.belongsTo(db.mailboxes, {foreignKey: {allowNull: false}})

db.mailboxes.hasMany(db.emails);

db.emails.belongsTo(db.templates, {foreignKey: {allowNull: false}});

db.templates.hasMany(db.emails);

module.exports = db;
