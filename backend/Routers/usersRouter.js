const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/usersController');
// const auth = require('../Middelware/authentification')

router.post('/signup', usersController.signUp);
router.post('/login', usersController.login);
router.get('/',usersController.getAllUsers);



module.exports = router;