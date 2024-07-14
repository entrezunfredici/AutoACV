const router = require('express').Router(),
tiquetsMixsController = require('../controller/tiquetsMixs')

//route pour récupérer les tiquets des véhicules
router.get('', tiquetsMixsController.getTiquetsMixs);
//route pour ajouter un tiquet de véhicule
router.post('', tiquetsMixsController.addTiquetMix);
//route pour supprimer un tiquet de véhicule par son id
router.delete('/:id', tiquetsMixsController.deleteTiquetMix);

module.exports = router;
