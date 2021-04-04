const express = require('express');
const router = express.Router();
const vendeurController = require('../Controllers/vendeurController');
// const auth = require('../Middelware/authentification')

router.post('/signup', vendeurController.Sellersignup);
router.post('/login', vendeurController.Sellerlogin);
// router.get('/',usersController.getAllUsers);



module.exports = router;