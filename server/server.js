/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)


connectDB()


const app = express()

const store = new MongoStore({
    collection:'sessions',
    uri:'mongodb://localhost:27017/products'
})

PORT =process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// session configuration
app.use(session({
    secret:'somesecretvalueforusers',
    resave:false,
    saveUninitialized:false,
    store
}))

app.use('/products', require('./routes/productRoutes'))
app.use('/home', require('./routes/homeRoutes'))
app.use('/category', require('./routes/categoryRoutes'))
app.use('/auth', require('./routes/userRoutes'))

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))