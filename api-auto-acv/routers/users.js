const router = require('express').Router();
const usersController = require('../controller/users')

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/name/:username', usersController.getUserByUsername)
router.get('/:id', usersController.getUsersByID)
router.patch('/:id', usersController.updateUserById)
router.patch("/password/:id", usersController.updatePassword)
router.delete('/:id', usersController.deleteUserById)

module.exports = router;
