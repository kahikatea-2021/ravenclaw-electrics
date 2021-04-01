const connection = require('./')

const TABLE_NAME = "cars"

function getCarsByType(type, db = connection) {
    return db(TABLE_NAME).where('type_id', type)
}

module.export = {
    getCarsByType
}