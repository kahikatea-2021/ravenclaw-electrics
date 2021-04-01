const express = require('express')
const utils = require('./utils')

const router = express.Router()

//example 
router.get('/', (req, res) => {
    res.render('home')
  })

  router.get('/low/:id', (req, res) => {
    const id = Number(req.params.id)

  })

  router.get('/medium/:id', (req, res) => {
    const id = Number(req.params.id)

  })

  router.get('/high/:id', (req, res) => {
    const id = Number(req.params.id)

  })

  module.exports = router
  
//for all routes add .catch at the end 

//   .catch(err => {
//     console.log(err.message)
//     res.send('Something went wrong')
//   })