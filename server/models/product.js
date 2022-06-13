const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    priceUSD: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product