const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('tiquetSource', {
        id_tiquetSource: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        },
        id_source: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'powersources',
                key: 'id_PowerSource'
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