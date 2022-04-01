const { Router } = require('express')
const { registrUser, loginUser, getUser, logOut } = require('../controllers/userController')
const router = Router()

router.post('/registr', registrUser)
router.post('/login', loginUser)
router.get('/user', getUser)
router.put('/logout', logOut)

module.exports = router