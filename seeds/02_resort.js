
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('RESORT').del()
    .then(function () {
      // Inserts seed entries
      return knex('RESORT').insert([
        {
          id: 1,
          resort_name: 'Winter Park',
          open_status: true,
          closing_date: 'April 29, 2019',
          snowfall: 6,
          territories: 3,
          lifts: 13,
          runs: 38
        },
        {
          id: 2,
          resort_name: 'Cool Resort',
          open_status: false,
          closing_date: 'April 29, 2019',
          snowfall: 4,
          territories: 0,
          lifts: 0,
          runs: 0
        }
      ]);
    });
};
