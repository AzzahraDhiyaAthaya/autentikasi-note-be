const express = require('express')
const { PORT, CLIENT_URL } = require('./constants')
const app = express()
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const pool = require('./db')

//import passport middleware
require('./middleware/passport-middleware')

//initialize middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));
app.use(passport.initialize())

//import router
const authRoutes = require('./routes/auth')

//initialize routes
app.use('/api', authRoutes)

//app start
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The app is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

appStart()
