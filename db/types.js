const connection = require('./')

function getTypes (db = connection) {
    return db('types').select() 
}

module.exports = {
    getTypes
}