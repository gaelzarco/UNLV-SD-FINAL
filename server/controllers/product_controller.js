const product = require('express').Router()
const db = require('../models')

product.get('/', async (req, res) => {
    await db.Product.findAll()
    .then((products) => {
        return res.status(200).json(products)
    })
})

product.post('/', async (req, res) => {
    const { name, ...rest } = req.body
    if (!name || !rest) {
        return res.status(400).json({ message: 'Please fill in all fields' })
    }

    if (!await db.Product.findOne({ name: name })) {
        db.Product.create({
            name,
            ...rest
        })
        .then(() => {
            return res.status(200).json({ message: 'Product added to catalog' })
        })
    }
})

module.exports = product