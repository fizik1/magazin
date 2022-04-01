const { Router } = require('express')
const { addNewProduct, getProductByCategory } = require('../controllers/productController')

const router = Router()

router.post('/add', addNewProduct)
router.get('/category/:category', getProductByCategory)

module.exports = router