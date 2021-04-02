
exports.up = function (knex) {
    return knex.schema.createTable('carts', function (table) {
        table.increments('id').primary()
        table.integer('car_id').references('cars.id')
        table.string('name')
        table.string('message')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('carts')
};
