
exports.up = function(knex, Promise) {
    return knex.schema.createTable("RESORT", (RESORT) => {
      RESORT.increments("id")
      RESORT.string("resort_name")
      RESORT.BOOLEAN("open_status")
      RESORT.string("closing_date")
      RESORT.integer("snowfall")
      RESORT.integer("territories").references("id").inTable("TERRITORY")
      RESORT.integer("lifts").references("id").inTable("LIFTS")
      RESORT.integer("runs").references("id").inTable("runs")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("RESORT")
  }