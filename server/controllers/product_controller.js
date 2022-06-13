const product = require('express').Router()

product.get('/', (req, res) => {
    return res.status(200).json({ message: 'Product controller set-up' })
})

module.exports = product