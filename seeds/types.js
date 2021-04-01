
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { id: 1, name: 'Entry Range' },
        { id: 2, name: 'Mid Range' },
        { id: 3, name: 'High End' }
      ]);
    });
};
