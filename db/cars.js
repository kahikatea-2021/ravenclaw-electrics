const connection = require('./')

const TABLE_NAME = "cars"

function getCarsByType(type, db = connection) {
    return db(TABLE_NAME).where('type_id', type)
}

function getCarById(id, db = connection) {
    return db(TABLE_NAME).select().where('id', id).first()
}

module.export = {
    getCarsByType,
    getCarById
}