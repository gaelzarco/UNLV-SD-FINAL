const catalog = require('express').Router()
const db = require('../models')

catalog.get('/', async (req, res) => {
    await db.Product.find()
    .then((products) => {
        return res.status(200).json(products)
    })
})

catalog.post('/', async (req, res) => {
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

catalog.get('/:productId', async (req, res) => {
    await db.Product.findById(req.params.productId)
    .then(product => {
        return res.status(200).json(product)
    })
})

module.exports = catalog