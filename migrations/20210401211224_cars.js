
exports.up = function (knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments('id').primary()
        table.string('name')
        table.decimal('price')
        table.decimal('speed')
        table.integer('range')
        table.string('url')
        table.decimal('charge_duration')
        table.string('description')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('cars')
};
