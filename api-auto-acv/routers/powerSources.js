const router = require('express').Router(),
powerSourcesController = require('../controller/powerSources')
//obtennir l'ensemble des sources d'énergies
router.get('', powerSourcesController.getPowerSources);
//obtennir une source d'énergie à partir de son id
router.get('/:id', powerSourcesController.getPowerSourceById);
//obtennir une source d'énergie à partir de son nom
router.get('/name/:name', powerSourcesController.getPowerSourceByName);
//éditer des sources d'énergies
router.patch('', powerSourcesController.editPowerSources);

module.exports = router;
