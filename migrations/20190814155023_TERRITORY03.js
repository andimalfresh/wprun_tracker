exports.up = function(knex, Promise) {
    return knex.schema.createTable("TERRITORY", (TERRITORY) => {
      TERRITORY.increments("id")
      TERRITORY.string("territory_name")
      TERRITORY.integer("resort")
      TERRITORY.boolean("open_status")
      TERRITORY.integer("lifts_running")
      TERRITORY.integer("lifts")
      TERRITORY.integer("runs")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("TERRITORY")
  }
