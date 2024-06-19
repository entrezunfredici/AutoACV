const router = require('express').Router(),
tiquetsVehiculesController = require('../controller/tiquetsVehicules')

//route pour récupérer les tiquets des véhicules
router.get('', tiquetsVehiculesController.getTiquetsVehicules);
//route pour ajouter un tiquet de véhicule
router.post('', tiquetsVehiculesController.addTiquetVehicule);
//route pour supprimer un tiquet de véhicule par son id
router.delete('/:id', tiquetsVehiculesController.deleteTiquetVehicule);

module.exports = router;
