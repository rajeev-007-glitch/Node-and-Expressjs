const express = require('express')
const router = express.Router()

const {createProduct, getAllProduct} = require('../controllers/productController')
const { uploadProductImageLocal, uploadProductImage } = require('../controllers/uploadsController');

router.route('/').get(getAllProduct).post(createProduct);
router.route('/uploads').post(uploadProductImage)

module.exports = router