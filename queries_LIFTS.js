const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("LIFTS")
    },
    createLIFT(createLIFT) {
        return db("LIFTS")
        .insert(createLIFT)
        .returning("*")
    },
    deleteLIFT(id) {
        return db("LIFTS")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("LIFTS").where("id", id)
    },
    updateLIFT(id, LIFTS) {
        return db("LIFTS")
          .where('id', id)
          .update(LIFTS)
          .returning('*')
      }
}