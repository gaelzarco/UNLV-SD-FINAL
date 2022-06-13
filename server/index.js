//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
app.get('/server', (req, res) => {
    res.json({ message: 'Connected to Server 200 OK' })
})

//controllers
const userController = require('./controllers/user_controller')
app.use('/user', userController)

const productController = require('./controllers/product_controller')
app.use('/product', productController)

//listen
app.listen(PORT, () => {
    console.log(`Express server 200 OK on PORT ${PORT}`)
})