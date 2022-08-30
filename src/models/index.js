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

module.exports = db;
