const tiquetsVehiculesService = require('../service/tiquetsVehicules');

//controleur pour obtenir tous les tiquets des vehicules
exports.getTiquetsVehicules = async (req, res) => {
    try {
        const tiquetsVehicules = await tiquetsVehiculesService.getTiquetsVehicules();
        res.status(200).json({success: true, tiquetsVehicules});
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

//controlleur pour obtennir un véhicule par son id
exports.addTiquetVehicule = async (req, res) => {
    const {brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source, id_vehicule} = req.body;
    try {
        const tiquetVehicule = await tiquetsVehiculesService.addTiquetVehicule(brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source, id_vehicule);
        if(!tiquetVehicule){
            res.status(400).json({ error: "Le tiquet n'a pas été ajouté" });
        }
        console.log(res);
        
        return res.json({success: true, tiquetVehicule});
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

//controller pour supprimer un tiquet de véhicule par son id
exports.deleteTiquetVehicule = async (req, res) => {
    try {
        const tiquetVehicule = await tiquetsVehiculesService.deleteTiquetVehicule(req.params.id);
        if(!tiquetVehicule){
            res.status(404).json({ error: "Le tiquet n'a pas été trouvé" });
        }
        res.status(204).json({success: true, tiquetVehicule});
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
