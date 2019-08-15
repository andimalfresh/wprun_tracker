
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('RUNS').del()
    .then(function () {
      // Inserts seed entries
      return knex('RUNS').insert([
        {
          id: 1,
          run_name: 'Village Way',
          run_sign: 1,
          groom_status: 1,
          snow_status: 2,
          open_status: true,
          territory: 1,
          lifts: 2
        },
        {
          id: 2,
          run_name: 'Turn Pike',
          run_sign: 1,
          groom_status: 2,
          snow_status: 2,
          open_status: true,
          territory: 1,
          lifts: 2
        },
        {
          id: 3,
          run_name: 'Lower Hughes',
          run_sign: 3,
          groom_status: 2,
          snow_status: 3,
          open_status: false,
          territory: 1,
          lifts: 2
        },
        {
          id: 4,
          run_name: 'Ambush',
          run_sign: 5,
          groom_status: 4,
          snow_status: 3,
          open_status: false,
          territory: 1,
          lifts: 2
        },
        {
          id: 5,
          run_name: 'Cramner',
          run_sign: 2,
          groom_status: 1,
          snow_status: 3,
          open_status: false ,
          territory: 1,
          lifts: 2
        },
      ]);
    });
};
