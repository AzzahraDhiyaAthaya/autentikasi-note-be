const { Router } = require('express')
const { 
    getUsers, 
    register, 
    login, 
    protected, 
    logout 
} = require('../controllers/auth')
const { registerValidator, loginValidation } = require('../validators/auth')
const { validationmiddleware } = require('../middleware/validations-middleware')
const { userAuth } = require('../middleware/auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidator, validationmiddleware, register)
router.post('/login', loginValidation, validationmiddleware, login)
router.get('/logout', logout)


module.exports = router
