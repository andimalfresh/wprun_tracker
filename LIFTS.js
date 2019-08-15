const express = require("express")
const router = express.Router()
const queries = require("./queries_LIFTS.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(LIFTS => res.status(200).send(LIFTS))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(LIFTS => res.status(200).send(LIFTS))
    })
    router.post("/", (req, res, next) => {
        queries.createLIFTS(req.body).then(LIFTS => res.status(201).send(LIFTS))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteLIFTS(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateLIFTS(req.params.id, req.body).then(LIFTS => res.json(LIFTS))
    })   

    module.exports = router