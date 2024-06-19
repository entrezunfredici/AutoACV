const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.hostname,
    dialect: 'mysql',
    port: dbConfig.port
});

module.exports = {
    instance,
    /*to add an model type:
    model: require('./model')(instance)*/
    vehicules: require('./vehicules')(instance),
    mixsEnergetiques: require('./mixsEnergetiques')(instance)
}
