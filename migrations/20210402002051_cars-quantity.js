
exports.up = function (knex) {
    return knex.schema.table('cars', function (table) {
        table.integer('quantity')
    })
};

exports.down = function (knex) {
    return knex.schema.table('cars', function (table) {
        table.dropColumn('quantity')
    })
};
