const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ 'Admin', 'Customer' ],
        required: true
    },
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User