const router = require('express').Router();
const usersController = require('../controller/users')

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/name/:username', usersController.getUserByUsername)
router.get('/:id', usersController.getUsersByID)

module.exports = router;
