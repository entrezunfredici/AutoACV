const router = require('express').Router(),
vehiculesController = require('../controller/vehicule')

router.get('/getVehicules', vehiculesController.getVehicules);

router.post('/addVehicule', vehiculesController.addVehicle);

module.exports = router;
