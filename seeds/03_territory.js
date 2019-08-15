
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TERRITORY').del()
    .then(function () {
      // Inserts seed entries
      return knex('TERRITORY').insert([
        {
          id: 1,
          territory_name: 'Winter Park',
          resort: 1,
          open_status: true,
          lifts_running: 6,
          lifts: 13,
          runs: 38
        },
        {
          id: 2,
          territory_name: 'Mary Jane',
          resort: 1,
          open_status: true,
          lifts_running: 4,
          lifts: 5,
          runs: 56
        },
        {
          id: 3,
          territory_name: 'Terrain Parks',
          resort: 1,
          open_status: true,
          lifts_running: 1,
          lifts: 2,
          runs: 6
        },
        {
          id: 4,
          territory_name: 'Parsen Bowl',
          resort: 1,
          open_status: false,
          lifts_running: 0,
          lifts: 1,
          runs: 16
        },
        {
          id: 5,
          territory_name: 'Eagle Wind',
          resort: 1,
          open_status: false,
          lifts_running: 0,
          lifts: 1,
          runs: 26
        },
        {
          id: 6,
          territory_name: 'Vasquez Ridge',
          resort: 1,
          open_status: false,
          lifts_running: 0,
          lifts: 1,
          runs: 16
        },
        {
          id: 7,
          territory_name: 'The Cirque',
          resort: 1,
          open_status: false,
          lifts_running: 0,
          lifts: 1,
          runs: 9
        }
      ]);
    });
};
