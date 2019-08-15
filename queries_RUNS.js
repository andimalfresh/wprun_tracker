const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("RUNS")
    },
    createRun(createRUN) {
        return db("RUNS")
        .insert(createRUN)
        .returning("*")
    },
    deleteRun(id) {
        return db("RUNS")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("RUNS").where("id", id)
    },
    updateRun(id, RUNS) {
        return db("RUNS")
          .where('id', id)
          .update(RUNS)
          .returning('*')
      }
}