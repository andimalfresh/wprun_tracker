
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('LIFTS').del()
    .then(function () {
      // Inserts seed entries
      return knex('LIFTS').insert([
        {
          id: 1,
          lift_name: 'Arrow',
          ride_time: 8,
          open_status: true,
          territory: 1,
          runs: 4
        },
        {
          id: 2,
          lift_name: 'Gemini',
          ride_time: 6,
          open_status: true,
          territory: 1,
          runs: 12
        },
        {
          id: 3,
          lift_name: 'Endeavor',
          ride_time: 7,
          open_status: true,
          territory: 6,
          runs: 3
        },
        {
          id: 4,
          lift_name: 'Discovery',
          ride_time: 8,
          open_status: true,
          territory: 1,
          runs: 4
        },
        {
          id: 5,
          lift_name: 'Prospector',
          ride_time: 1,
          open_status: true,
          territory: 1,
          runs: 9
        },
      ]);
    });
};
