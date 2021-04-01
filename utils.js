const config = require('./knexfile').development
const database = require('knex')(config)
  
  function getcars (db = database) {  
  }
