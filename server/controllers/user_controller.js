const express = require('express')
const user = express.Router()
const db = require('../models')

user.post('/', (req, res) => {
    const { firstName, lastName, email, password, role } = req.body

    if(!firstName || !lastName || !email || !password || !role){
        return res.status(400).json({message: 'Please enter all fields'});
    }
    
    db.User.create(req.body)
    .then(() => {
        return res.status(200).json({ message: 'User created 200 OK' })
    }) 

    .catch(err => {
        console.log(`Error occured ${err}`)
        return res.status(400).json({ message: 'Something went wrong or user already exists' })
    }) 
})

user.get('/:userId', (req, res) => {
    db.User.findById(req.params.userId)
    .populate('cart')
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        console.log(`Error occured ${err}`)
    })
})

module.exports = user