exports.up = function(knex, Promise) {
    return knex.schema.createTable("TERRITORY", (TERRITORY) => {
      TERRITORY.increments("id")
      TERRITORY.string("territory_name")
      TERRITORY.integer("resort").references("id").inTable("RESORT")
      TERRITORY.boolean("open_status")
      TERRITORY.integer("lifts_running").references("id").inTable("LIFTS")
      TERRITORY.integer("lifts").references("territory").inTable("LIFTS")
      TERRITORY.integer("runs").references("lift").inTable("RUNS")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("TERRITORY")
  }
