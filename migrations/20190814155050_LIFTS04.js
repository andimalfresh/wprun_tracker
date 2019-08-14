exports.up = function(knex, Promise) {
    return knex.schema.createTable("LIFTS", (LIFTS) => {
      LIFTS.increments("id")
      LIFTS.string("lift_name")
      LIFTS.integer("groom_status")
      LIFTS.integer("snow_status")
      LIFTS.boolean("open_status")
      LIFTS.integer("territory")
      LIFTS.integer("runs")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("LIFTS")
  }

