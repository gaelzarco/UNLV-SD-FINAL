const express = require('express')
const user = express.Router()
const db = require('../models')

user.post('/', (req, res) => {
    console.log(req.body)
    db.User.create(req.body)
    .then(() => {
        res.status(200).json({ message: 'User created 200 OK' })
    }) 
    .catch(err => {
        console.log(`Error occured ${err}`)
        res.status(400).json({ message: 'Something went wrong' })
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