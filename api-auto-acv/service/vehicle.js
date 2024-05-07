const { vehicules } = require('../models');

exports.getvehicules = async (req, res) => {
    return vehicules.findAll();
}

exports.getvehiculesById = async (id_Vehicules) => {
    return vehicules.findOne(
        id_Vehicules
    );
}

exports.getvehiculesByBrand = async (brand) => {
    return vehicules.findAll({
        where: {
            brand: brand
        }
    });
}

exports.getvehiculesByModel = async (brand, model) => {
    return vehicules.findAll({
        where: {
            brand: brand,
            model: model
        }
    })
}

exports.getvehiculesByTechnology = async (technology) => {
    return vehicules.findAll({
        where: {
            technology: technology
        }
    });
}

exports.getvehiculesByType = async (type) => {
    return vehicules.findAll({
        where: {
            type: type
        }
    });
}

exports.addVehicule = async (brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source) => {
    return vehicules.create(
        brand,
        motorisation,
        consumption,
        buildImpact,
        recycleImpact,
        technology,
        type,
        source,
        enginePower,
        model
    )
}

exports.modifVehicles =  async (id, brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source) => {
    const modifiedVehicule = await this.getvehiculesById(id);
    return modifiedVehicule.update({
        brand,
        motorisation,
        consumption,
        buildImpact,
        recycleImpact,
        technology,
        type,
        source,
        enginePower,
        model
    })
}
