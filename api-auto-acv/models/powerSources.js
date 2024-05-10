const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('powerSources', {
        id_PowerSource: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // wind: {
        //     type: DataTypes.NUMBER
        // },
        // solar: {
        //     type: DataTypes.NUMBER
        // },
        // geothermal: {
        //     type: DataTypes.NUMBER
        // },
        // biomass: {
        //     type: DataTypes.NUMBER
        // },
        // hydroelectric: {
        //     type: DataTypes.NUMBER
        // },
        // nuclear: {
        //     type: DataTypes.NUMBER
        // },
        // coal: {
        //     type: DataTypes.NUMBER
        // },
        // gazFired: {
        //     type: DataTypes.NUMBER
        // },
        powerSource_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        powerSource_impact: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        powerSource_info_sources: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}
