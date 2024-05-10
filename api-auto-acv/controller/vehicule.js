const vehiculeService = require('../service/vehicule');

//controleur pour obtennir tous les véhicules
exports.getVehicules = async (req, res) => {
    try {
        const vehicules = await vehiculeService.getVehicules();
        res.status(200).json({success: true, vehicules});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//controlleur pour obtennir un véhicule par son id
exports.getVehiculeById = async (req, res) => {
    try {
        const vehicule = await vehiculeService.getVehiculeById(req.params.id);
        if(!vehicule){
            res.status(404).json({ error: "vehicule non trouvé" });
        }
        res.status(200).json({success: true, vehicule});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//controlleur pour ajouter un véhicule
exports.addVehicule = async (req, res, next) => {
    const {brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source} = req.body;
    try {
        const vehicules = await vehiculeService.addVehicule(brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source);
        if (!vehicules) {
            res.status(400).json({ error: "Le véhicule n'a pas été trouvé" });
        }
        return res.status(201).json({success: true, vehicules}).send();
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}

//contrôle pour modifier un véhicule
exports.updateVehicule = async (req, res, next) => {
    const id=req.params.id;
    const {brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source} = req.body;
    try {
        const vehicules = await vehiculeService.updateVehicule(id, brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source);
        if (!vehicules) {
            res.status(404).json({ error: "un champ essenciel n'est pas présent ou incorrect" });
        }
        return res.status(200).json({success: true, vehicules}).send()
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}
