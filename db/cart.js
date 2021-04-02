const connection = require('./')

const TABLE_NAME = 'carts'
function buyCar(carId, name, comment, db = connection) {
    return db(TABLE_NAME).insert({
        car_id: carId,
        name: name,
        message: comment
    })
}

module.exports = {
    buyCar
}