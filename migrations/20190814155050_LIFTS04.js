exports.up = function(knex, Promise) {
    return knex.schema.createTable("LIFTS", (LIFTS) => {
      LIFTS.increments("id")
      LIFTS.string("lift_name")
      LIFTS.integer("groom_status")
      LIFTS.integer("snow_status")
      LIFTS.boolean("open_status")
      LIFTS.integer("territory").references("id").inTable("TERRITORY")
      LIFTS.integer("runs").references("runs").inTable("LIFTS")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("LIFTS")
  }

