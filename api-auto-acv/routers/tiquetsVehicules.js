const router = require('express').Router();
const tiquetsVehiculesController = require('../controller/tiquetsVehicules');

// Route pour récupérer les tiquets des véhicules
router.get('', tiquetsVehiculesController.getTiquetsVehicules);

// Route pour ajouter un tiquet de véhicule
router.post('', tiquetsVehiculesController.addTiquetVehicule);

// Route pour supprimer un tiquet de véhicule par son id
router.delete('/:id', tiquetsVehiculesController.deleteTiquetVehicule);

module.exports = router;
