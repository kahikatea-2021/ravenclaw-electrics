const express = require('express')
const router = express.Router()
const cart = require('./db/cart')

router.get('/cart/:id', (req, res) => {
    const id = req.params.id
    res.render('cart', {id})
})

router.post('/buyCar/:id', (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const comment = req.body.comment
    return db.buyCar(id, name, comment)
    .then(() => {
      res.redirect(`/car/${id}`)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.redirect(`/car/${id}`)
    })
})

module.exports = router