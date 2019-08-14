exports.up = function(knex, Promise) {
    return knex.schema.createTable("USERS", (USERS) => {
      USERS.increments("id")
      USERS.string("user_name")
      USERS.string("password")
      USERS.integer("resort_id")
      USERS.string("access_level")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("USERS")
  }
