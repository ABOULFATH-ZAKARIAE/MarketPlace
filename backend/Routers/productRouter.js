const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');
// const auth = require('../Middelware/authentification')

router.post('/productadd', productController.ProductAdd);
router.get('/productget',productController.getAllProduct);
router.get('/productget/:id',productController.getProductById);




module.exports = router;