const { Router } = require('express')
const { addCategory, getCategorys } = require('../controllers/categoryController')
const router = Router()


router.post('/add', addCategory)
router.get('/get', getCategorys)


module.exports = router