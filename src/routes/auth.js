const { Router } = require('express')
const { 
    getUsers, 
    register, 
    login, 
    protected, 
    logout 
} = require('../controllers/auth')
const { 
    allNotes, 
    newNote, 
    oneNote,
    editNote,
    deleteNote
} = require ('../controllers/note')
const { registerValidator, loginValidation } = require('../validators/auth')
const { validationmiddleware } = require('../middleware/validations-middleware')
const { userAuth } = require('../middleware/auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidator, validationmiddleware, register)
router.post('/login', loginValidation, validationmiddleware, login)
router.get('/logout', logout)

router.get('/notes', allNotes)
router.post('/new-note', newNote)
router.get('/notes/:id', oneNote)
router.put('/notes/:id', editNote)
router.delete('/notes/:id', deleteNote)

module.exports = router
