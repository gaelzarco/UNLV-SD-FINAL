const express = require('express')
const product = express.Router()

product.get('/', (req, res) => {
    return res.status(200).json({ message: 'Product controller set-up' })
})

module.exports = product