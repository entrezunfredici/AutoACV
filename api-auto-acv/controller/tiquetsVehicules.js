const tiquetsVehiculesService = require('../service/tiquetsVehicules');

// Controleur pour obtenir tous les tiquets des vehicules
exports.getTiquetsVehicules = async (req, res) => {
    try {
        const tiquetsVehicules = await tiquetsVehiculesService.getTiquetsVehicules();
        res.status(200).json({ success: true, tiquetsVehicules });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Controleur pour ajouter un tiquet de véhicule
exports.addTiquetVehicule = async (req, res) => {
    const { brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, source, dutyCycle, useImpact, id_vehicule } = req.body;

    try {
        const tiquetVehicule = await tiquetsVehiculesService.addTiquetVehicule(
            brand, model, motorisation, type, technology, consumption, enginePower, buildImpact, recycleImpact, dutyCycle, useImpact, source, id_vehicule
        );

        if (!tiquetVehicule) {
            return res.status(400).json({ error: "Le tiquet n'a pas été ajouté" });
        }

        return res.status(201).json({ success: true, tiquetVehicule });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
};

// Controleur pour supprimer un tiquet de véhicule par son id
exports.deleteTiquetVehicule = async (req, res) => {
    try {
        const tiquetVehicule = await tiquetsVehiculesService.deleteTiquetVehicule(req.params.id);
        if (!tiquetVehicule) {
            return res.status(404).json({ error: "Le tiquet n'a pas été trouvé" });
        }
        return res.status(204).json({ success: true });
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
