const router = require('express').Router(),
powerSourcesController = require('../controller/powerSources')

router.get('', powerSourcesController.getPowerSources);

router.get('/:id', powerSourcesController.getPowerSourceById);

router.get('/name=:name', powerSourcesController.getPowerSourceByName);

router.post('/edit', powerSourcesController.editPowerSources);

module.exports = router;
