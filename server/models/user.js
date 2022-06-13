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
        required: true,
        minlength: [6, 'Password must be atleast 6 characters long']
    },
    role: {
        type: String,
        enum: [ 'Admin', 'Customer' ],
        required: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User