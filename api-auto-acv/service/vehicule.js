const { vehicules } = require('../models');

//service retournant l'ensemble des véhicules
exports.getVehicules = async (req, res) => {
    return await vehicules.findAll();
}

//service retournant un véhicule par son id
exports.getVehiculeById = async (id_Vehicules) => {
    console.log(id_Vehicules);
    return await vehicules.findOne({
        where:{
            id_Vehicules: id_Vehicules
        }
    });
}

//service ajoutant un véhicule à la BDD
exports.addVehicule = async (brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source) => {
    return await vehicules.create({
        brand:brand, 
        motorisation:motorisation, 
        consumption:consumption, 
        buildImpact:buildImpact, 
        recycleImpact:recycleImpact, 
        technology:technology, 
        type:type, 
        source:source, 
        enginePower:enginePower, 
        model:model
    });
}

//service modifiant un véhicule dans la BDD
exports.updateVehicule =  async (id, brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source) => {
    const modifiedVehicule = await this.getVehiculeById(id);
    console.log(source)
    return await modifiedVehicule.update({
        brand:brand, 
        motorisation:motorisation, 
        consumption:consumption, 
        buildImpact:buildImpact, 
        recycleImpact:recycleImpact, 
        technology:technology, 
        type:type, 
        source:source, 
        enginePower:enginePower, 
        model:model
    });
}
