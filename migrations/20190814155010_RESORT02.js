
exports.up = function(knex, Promise) {
    return knex.schema.createTable("RESORT", (RESORT) => {
      RESORT.increments("id")
      RESORT.string("resort_name")
      RESORT.boolean("open_status")
      RESORT.string("closing_date")
      RESORT.integer("snowfall")
      RESORT.integer("territories")
      RESORT.integer("lifts")
      RESORT.integer("runs")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("RESORT")
  }