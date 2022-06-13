//dependencies
const express = require('express')
const cors = require('cors')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/', (re, res) => {
    res.json({ message: 'Connected to Server 200 OK' })
})

//controllers
const productController = require('./controllers/product_controller')
app.use('/product', productController)

const userController = require('./controllers/product_controller')
app.use('/product', userController)

app.listen(PORT, () => {
    console.log(`Express server 200 OK on PORT ${PORT}`)
})