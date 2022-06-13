require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
   console.log("Data sittin' at" , process.env.MONGO_URI)
})

module.exports.Cart = require('./cart')
module.exports.Product = require('./product') 
module.exports.User = require('./user') 