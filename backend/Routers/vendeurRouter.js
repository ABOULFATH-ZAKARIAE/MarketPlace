const express = require('express');
const router = express.Router();
const vendeurController = require('../Controllers/vendeurController');
// const auth = require('../Middelware/authentification')

router.post('/signup', vendeurController.signup);
router.post('/login', vendeurController.login);
// router.get('/',usersController.getAllUsers);



module.exports = router;