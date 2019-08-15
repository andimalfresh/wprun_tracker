const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("RESORT")
    },
    createRESORT(createOrder) {
        return db("RESORT")
        .insert(createOrder)
        .returning("*")
    },
    deleteRESORT(id) {
        return db("RESORT")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("RESORT").where("id", id)
    },
    updateRESORT(id, RESORT) {
        return db("RESORT")
          .where('id', id)
          .update(RESORT)
          .returning('*')
      }
}