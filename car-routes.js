const express = require('express')
const types = require('./db/types')
const cars = require('./db/cars')

const router = express.Router()

//example 
router.get('/', (req, res) => {
  return types.getTypes()
    .then(types => {
      const viewData = {
        types
      }
      console.log(types)
      res.render('home', viewData)
    })
    .catch((Error) => {
      console.log(Error.message)
      res.send('it aint working :(')
    })
})

router.get('/low/:id', (req, res) => {
  const id = Number(req.params.id)
  res.render('car-list')
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