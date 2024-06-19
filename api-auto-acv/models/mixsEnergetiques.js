const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('mixEnergetique', {
        country: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        wind: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        solar: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        geothermal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        biomass: {
            type: DataTypes.FLOAT,
            allowNull: false
        }, 
        hydroelectric: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        nuclear: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        coal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        oil: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        gaz_fired: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}