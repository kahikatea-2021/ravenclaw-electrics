
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          name: 'Nissan Leaf',
          price: 59990,
          speed: 7.9,
          range: 270,
          url: 'images/car1.jpeg',
          charge_duration: 7.5,
          type_id: 1,
          description: `Get the best of both worlds with instant acceleration and surprising power alongside an effortless, quiet drive performance — all with zero exhaust emissions. Command the road with every twist and turn, as LEAF’s low centre of gravity ensures ultra-smooth handling. It's a driving experience unlike any other`
        },
        {
          id: 2,
          name: 'MG ZSEV',
          price: 48990,
          speed: 8.2,
          range: 263,
          url: 'images/car2.jpeg',
          charge_duration: 7,
          type_id: 1,
          description: `
          The new MG ZS EV is the family-friendly electric car, designed for those who want all the advantages of a zero-emissions vehicle without compromising on practicality or style.
          `
        },
        {
          id: 3,
          name: 'Hyundai Kona Electric ',
          price: 77990,
          speed: 7.9,
          range: 449,
          url: 'images/car3.jpeg',
          charge_duration: 7.5,
          type_id: 2,
          description: `
          The Kona Electric is a compact 100% electric SUV with 449 km of effective, real-world driving range. Combining leading safety technology, impressive performance and the versatility of an SUV makes for a truly groundbreaking vehicle which represents the future of motoring
          `
        },
        {
          id: 4,
          name: 'Kia Niro EV',
          price: 77990,
          speed: 7.8,
          range: 455,
          url: 'images/car4.jpeg',
          charge_duration: 10,
          type_id: 2,
          description: `
          The new Kia Niro EV marks a new and exciting chapter of electric mobility. The key to electric mobility is technology that simply performs well, with all the comfort you need for every journey. Offering a 455km* range and fast-charging abilities, the new Niro EV is a major step in electric powertrain technology.
          `
        },
        {
          id: 5,
          name: 'Audi E-Tron 50 Advanced',
          price: 119990,
          speed: 6.6,
          range: 336,
          url: 'images/car5.jpeg',
          charge_duration: 9,
          type_id: 3,
          description: `
          With its combination of electric drive and a comfortable, sophisticated interior, the Audi e-tron creates a new sense of mobility. Whether parking, in the city or on long journeys, the Audi e-tron makes life easier for its driver in many situations. The full-size SUV combines sportiness and everyday practicality. Its two electric motors together with electric all-wheel drive provide for awesome performance and agile handling. The high-voltage battery is the foundation for a sufficient range. In combination with a comprehensive range of charging options for home and on the move, you can enjoy fully electric driving without having to compromise.
          `
        },
        {
          id: 6,
          name: 'Tesla Model 3 Performance',
          price: 105000,
          speed: 3.3,
          range: 628,
          url: 'images/car6.jpeg',
          charge_duration: 8.15,
          type_id: 3,
          description: `
          Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-100 km/h in as little as 3.3 seconds.
          `
        }

      ]);
    });
};
