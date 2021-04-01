const config = require('./knexfile').development
const database = require('knex')(config)

// function getcars (db = database) {
//     return db('cars').select()
//       .then(electrics => {
//         return {
//           cars: cars.map(womble => ({
//             id: womble.id,
//             name: womble.name,
//             charId: womble.characteristic_id
//           }))
//         }
//       })
//   }
  

