const router = require('express').Router(),
vehiculesController = require('../controller/vehicule')

//route pour obtennir la liste des véhicules
router.get('/getVehicules', vehiculesController.getVehicules);
//route pour obtennir un véhicule par son id
router.get('/getVehicule/:id', vehiculesController.getVehiculeById);
//route pour ajouter un véhicule
router.post('/addVehicule', vehiculesController.addVehicle);
//route pour modifier un véhicule
router.post('/updateVehicule', vehiculesController.modifVehicles);

module.exports = router;
