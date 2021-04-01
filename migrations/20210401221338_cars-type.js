
exports.up = function (knex) {
    return knex.schema.table('cars', function (table) {
        table.integer('type_id').references('types.id')
    })
};

exports.down = function (knex) {
    return knex.schema.table('cars', function (table) {
        table.dropColumn('type_id')
    })
};
