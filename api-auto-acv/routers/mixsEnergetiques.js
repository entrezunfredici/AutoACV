const router = require('express').Router(),
mixsEnergetiquesController = require('../controller/mixsEnergetiques')

router.get('', mixsEnergetiquesController.getAllMixs);
//route pour récupérer un mix energetique par le champs country
router.get('/:country', mixsEnergetiquesController.getMixsByCountry);
//route pour modifier un mix energetique par le champ country
router.patch('/:country', mixsEnergetiquesController.updateMixByCountry);

module.exports = router;
