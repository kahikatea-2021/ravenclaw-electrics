
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { id: 1, name: 'Entry Range', image: 'images/car1.jpeg' },
        { id: 2, name: 'Mid Range', image: 'images/car3.jpeg' },
        { id: 3, name: 'High End', image: 'images/car6.png' }
      ]);
    });
};
