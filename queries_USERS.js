const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("USERS")
    },
    createUSER(createUSER) {
        return db("USERS")
        .insert(createUSER)
        .returning("*")
    },
    deleteUSER(id) {
        return db("USERS")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("USERS").where("id", id)
    },
    updateUSER(id, USERS) {
        return db("USERS")
          .where('id', id)
          .update(USERS)
          .returning('*')
      }
}