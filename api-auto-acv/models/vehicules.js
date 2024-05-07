const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('vehicle', {
        id_Vehicules: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        motorisation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        consumption: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        buildImpact: {
            type: DataTypes.STRING,
        },
        recycleImpact: {
            type: DataTypes.STRING,
        },
        technology: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false
        },
        enginePower: {
            type: DataTypes.INTEGER
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
}