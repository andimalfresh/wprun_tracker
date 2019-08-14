
exports.up = function(knex, Promise) {
    return knex.schema.createTable("RUNS", (RUNS) => {
      RUNS.increments("id")
      RUNS.string("run_name")
      RUNS.integer("run_sign")
      RUNS.integer("groom_status")
      RUNS.integer("snow_status")
      RUNS.boolean("open_status")
      RUNS.integer("territory")
      RUNS.integer("lift")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("RUNS")
  }
