const express = require("express")
const router = express.Router()
const queries = require("./queries_RUNS.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(RUNS => res.status(200).send(RUNS))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(RUNS => res.status(200).send(RUNS))
    })
    router.post("/", (req, res, next) => {
        queries.createRUNS(req.body).then(RUNS => res.status(201).send(RUNS))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteRUNS(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateRUNS(req.params.id, req.body).then(RUNS => res.json(RUNS))
    })   

    module.exports = router