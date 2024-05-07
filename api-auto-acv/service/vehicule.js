const { vehicules } = require('../models');

exports.getVehicules = async (req, res) => {
    return vehicules.findAll();
}

exports.getVehiculeById = async (id_Vehicules) => {
    return vehicules.findOne(
        id_Vehicules
    );
}

exports.addVehicule = async (brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source) => {
    console.log(brand+","+ model+","+ motorisation+","+consumption+","+technology);
    return vehicules.create({brand, motorisation, consumption, buildImpact, recycleImpact, technology, type, source, enginePower, model});
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
