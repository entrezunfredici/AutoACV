const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

// const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
//     host: dbConfig.hostname,
//     dialect: 'mysql',
//     port: dbConfig.port
// });
const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

module.exports = {
    instance,
    /*to add an model type:
    model: require('./model')(instance)*/
    vehicules: require('./vehicules')(instance),
    usersModel: require('./users')(instance),
    powerSources: require('./powerSources')(instance),
    mixsEnergetiques: require('./mixsEnergetiques')(instance),
    tiquetsVehicules: require('./tiquetsVehicules')(instance),
    tiquetsSources: require('./tiquetsSources')(instance),
    tiquetsMixs: require('./tiquetsMixs')(instance)
}
