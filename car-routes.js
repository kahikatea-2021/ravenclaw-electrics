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

  router.get('/types/:id', (req, res) => {
    const id = Number(req.params.id)
    return cars.getCarsByType(id)
    .then(cars => {
        const viewData = {
            cars
        }
        res.render('car-list', viewData)
    })
    .catch((Error) => {
        console.log(Error.message)
        res.send('whers you cars mate??')
      })
  })

  router.get('/car/:id', (req, res) => {
    const id = Number(req.params.id)
    return cars.getCarById(id)
    .then(car => {
        const viewData = {
            car
        }
        console.log(viewData);
        res.render('car', viewData)
    })
    .catch((Error) => {
        console.log(Error.message)
        res.send('seriously fix yo code boss')
      })
  })

  

  module.exports = router

//for all routes add .catch at the end 

//   .catch(err => {
//     console.log(err.message)
//     res.send('Something went wrong')
//   })