const product = require('express').Router()
const db = require('../models')

product.get('/', async (req, res) => {
    await db.Product.findAll()
    .then(() => {
        return res.status(200).json(products)
    })
})

module.exports = product