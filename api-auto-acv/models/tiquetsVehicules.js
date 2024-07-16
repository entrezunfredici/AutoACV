const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('tiquetVehicle', {
        id_tiquetVehicules: {
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
            type: DataTypes.FLOAT,
        },
        recycleImpact: {
            type: DataTypes.FLOAT,
        },
        dutyCycle: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        useImpact: {
            type: DataTypes.FLOAT,
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
        id_vehicule: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'vehicles',
                key: 'id_Vehicules'
            }
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usersmodels',
                key: 'id_Users'
            }
        }
    });
}