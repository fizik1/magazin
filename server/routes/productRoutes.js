const { Router } = require('express')
const { addNewProduct, getProducts } = require('../controllers/productController')

const router = Router()


router.get('/add', getProducts)
router.post('/add', addNewProduct)

module.exports = router