const user = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')

user.post('/', async (req, res) => {
    const { password, ...rest } = req.body

    if(!password || !rest) {
        return res.status(400).json({message: 'Please enter all fields'});
    }

    if (await db.User.find({ email: req.body.email }) === []) {
        return res.status(400).json({ message: 'User already exists' })
    }

    db.User.create({ 
        ...rest,
        password: await bcrypt.hash(password, 10)
    })
    .then(() => {
            return res.status(200).json({ message: 'User created 200 OK' })
        })  
})

user.post('/login', async (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Please enter all fields' })
    }

    let user = await db.User.findOne({ email: req.body.email })

    if(user === [] || !await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).json({ message: 'Could not find user with associated username and password' })
    } else return res.status(200).json({ user })
})

module.exports = user