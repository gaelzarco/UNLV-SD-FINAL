const cart = require('express').Router()
const db = require('../models')

cart.get('/cart/:id', (req, res) => {
    const id = req.params.id
    try {
        let cart = await db.Cart.findOne({ userId: id })
        if (cart && cart.items.length > 0) {
            res.json(cart)
        } else {
            res.send(null)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
    }
})

cart.post('/cart/:id', (req, res) => {
    const id = req.params.id
    const { productId, quantity } = req.body
})

cart.delete('/cart/:userId/:itemId', (req, res) => {
    res.status(200)
})