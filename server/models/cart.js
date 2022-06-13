const mongoose = require('mongoose')
const {Schema} = mongoose

const cartSchema = new Schema({
    userId: {
        type: String
    },
    products: [{
        productId: {
            type: String
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity cannot be less than 1'],
            default: 1
        },
        price: Number
    }],
    total: {
        type: Number,
        required: true,
        default: 0
    }
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart