const { Router } = require('express')
const { getFourProducts } = require('../controllers/homeController')
const router = Router()

router.get('/', getFourProducts)

module.exports = router