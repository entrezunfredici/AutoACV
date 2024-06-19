const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('powerSources', {
        id_PowerSource: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
