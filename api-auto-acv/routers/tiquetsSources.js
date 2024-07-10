const router = require('express').Router(),
tiquetsSourcesController = require('../controller/tiquetsSources')

//route pour récupérer les tiquets des véhicules
router.get('', tiquetsSourcesController.getTiquetsSources);
//route pour ajouter un tiquet de véhicule
router.post('', tiquetsSourcesController.addTiquetSource);
//route pour supprimer un tiquet de véhicule par son id
router.delete('/:id', tiquetsSourcesController.deleteTiquetSource);

module.exports = router;
