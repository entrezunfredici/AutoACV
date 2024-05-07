const vehiculeService = require('../service/vehicule');

exports.getVehicules = async (req, res) => {
    try {
        const vehicules = await vehiculeService.getVehicules();
        res.status(201).json({success: true, vehicules});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getVehiculeById = async (req, res) => {
    try {
        const vehicule = await vehiculesService.getVehiculesById(req.params.id_Vehicules);
        if(!vehicules){
            res.status(404).json({ error: "vehicule not found" });
        }
        res.status(201).json({success: true, vehicule});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addVehicle = async (req, res, next) => {
    const {brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source} = req.body
    console.log(brand+","+ model+","+ motorisation+","+consumption+","+enginePower);
    try {
        const vehicules = await vehiculeService.addVehicule(brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source)
        if (!vehicules) {
            res.status(404).json({ error: "cannot add vehicle" });
        }
        return res.status(201).json({success: true, vehicules}).send()
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}
