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

<<<<<<< HEAD
  router.get('/types/:id', (req, res) => {
    const id = Number(req.params.id)
    return cars.getCarByType(id)
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
||||||| 91ddb71
  router.get('/low/:id', (req, res) => {
    const id = Number(req.params.id)

  })

  router.get('/medium/:id', (req, res) => {
    const id = Number(req.params.id)

  })
=======
router.get('/low/:id', (req, res) => {
  const id = Number(req.params.id)

})

router.get('/medium/:id', (req, res) => {
  const id = Number(req.params.id)

})
>>>>>>> 1f55851e22a795a376e5c4329286f80cc60d3b76

<<<<<<< HEAD
  router.get('/car/:id', (req, res) => {
    const id = Number(req.params.id)
    
  })
||||||| 91ddb71
  router.get('/high/:id', (req, res) => {
    const id = Number(req.params.id)

  })
=======
router.get('/high/:id', (req, res) => {
  const id = Number(req.params.id)

})
>>>>>>> 1f55851e22a795a376e5c4329286f80cc60d3b76

module.exports = router

//for all routes add .catch at the end 

//   .catch(err => {
//     console.log(err.message)
//     res.send('Something went wrong')
//   })