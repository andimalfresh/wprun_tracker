const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("TERRATORY")
    },
    createTERRATORY(createTERRATORY) {
        return db("TERRATORY")
        .insert(createTERRATORY)
        .returning("*")
    },
    deleteTERRATORY(id) {
        return db("TERRATORY")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("TERRATORY").where("id", id)
    },
    updateTERRATORY(id, TERRATORY) {
        return db("TERRATORY")
          .where('id', id)
          .update(TERRATORY)
          .returning('*')
      }
}