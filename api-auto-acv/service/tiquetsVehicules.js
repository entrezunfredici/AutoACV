const { tiquetsVehicules } = require('../models');

//service retournant l'ensemble des véhicules
exports.getTiquetsVehicules = async (req, res) => {
    return await tiquetsVehicules.findAll();
}

//service permettant d'ajouter un tiquet de véhicule
exports.addTiquetVehicule = async (brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, dutyCycle, useImpact, source, id_vehicule, id_user) => {
    return await tiquetsVehicules.create({
        brand:brand, 
        motorisation:motorisation, 
        consumption:consumption, 
        buildImpact:buildImpact, 
        recycleImpact:recycleImpact, 
        dutyCycle:dutyCycle,
        useImpact:useImpact,
        technology:technology, 
        type:type, 
        source:source, 
        enginePower:enginePower, 
        model:model,
        id_vehicule:id_vehicule,
        id_user:id_user
    });
}

//service permettant de supprimer un tiquet de véhicule par son id
exports.deleteTiquetVehicule = async (id) => {
    const tiquetVehicule = await this.getTiquetVehiculeById(id);
    return await tiquetVehicule.destroy();
}

//service permettant de récupérer un tiquet de véhicule par son id
exports.getTiquetVehiculeById = async (id) => {
    return await tiquetsVehicules.findByPk(id);
}
