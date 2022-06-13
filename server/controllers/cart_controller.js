const cart = require('express').Router()
const db = require('../models')

cart.get('/cart/:id', async (req, res) => {
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

cart.post('/cart/:id', async (req, res) => {
    const id = req.params.id
    const { productId, quantity } = req.body

    try {
        let cart = await db.Cart.findOne({ userId: id })
        let product = await db.Product.findOne({ _id: productId })
        if(!product) {
            return res.status(400).json({ message: 'Item not found' })
        }

        const price = product.price
        const name = product.name

        // checks if cart exits for user
        if (cart) {
            let productIndex = cart.products.findIndex(p => p.productId == productId)

            // checks if product exists or not
            if (productIndex > -1) {
                let productItem = cart.products[productIndex]
                productItem.quantity += quantity
                cart.products[productIndex] = productItem
            } else {
                cart.products.push({ productId, name, price })
            }

            cart.total += quantity * price
            cart = await cart.save()
            return res.status(201).send(cart)

            // If no cart exists, Create one
        } else {
            const newCart = await db.Cart.create({
                userId,
                items: [{ productId, name, quantity, price }],
                total: quantity*price
            })

            return res.status(201).send(newCart)
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
    }
})

cart.delete('/cart/:userId/:itemId', (req, res) => {
    res.status(200)
})

module.exports = cart