const router = require('express').Router(),
vehiculesController = require('../controller/vehicule')

//route pour obtennir la liste des véhicules
router.get('', vehiculesController.getVehicules);
//route pour obtennir un véhicule par son id
router.get('/:id', vehiculesController.getVehiculeById);
//route pour ajouter un véhicule
router.post('/addVehicule', vehiculesController.addVehicule);
//route pour modifier un véhicule
router.patch('/:id', vehiculesController.updateVehicule);

module.exports = router;
