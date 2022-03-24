/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')


connectDB()


const app = express()

PORT =process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/products', require('./routes/productRoutes'))

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))