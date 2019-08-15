
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('USERS').del()
    .then(function () {
      // Inserts seed entries
      return knex('USERS').insert([
        {
          id: 1,
          user_name: 'Bobby123',
          password: 'rowValue1',
          home_resort: 1,
          access_level: 4
        },
        {
          id: 2,
          user_name: 's0nja',
          password: 'hell0world',
          home_resort: 1,
          access_level: 4
        },        {
          id: 3,
          user_name: 'DoReido',
          password: 'wowBama',
          home_resort: 1,
          access_level: 3
        },        {
          id: 4,
          user_name: 'andimaal',
          password: 'cashl00t',
          home_resort: 1,
          access_level: 3
        },
      ]);
    });
};
