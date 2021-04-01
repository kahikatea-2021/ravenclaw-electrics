const express = require('express')
const db = require('./utils')

const router = express.Router()

//example 
router.get('/', (req, res) => {
    .then(woble => {
        res.render('assignments', woble)
        return null
      })
    .catch((Error) => {
        console.log(Error.message)
        res.send('it aint working :(')
      })
  })

  router.get('/low/:id', (req, res) => {

  })

  router.get('/medium/:id', (req, res) => {

  })

  router.get('/high/:id', (req, res) => {

  })