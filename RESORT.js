const express = require("express")
const router = express.Router()
const queries = require("./queries_RESORT.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(RESORT => res.status(200).send(RESORT))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(RESORT => res.status(200).send(RESORT))
    })
    router.post("/", (req, res, next) => {
        queries.createRESORT(req.body).then(RESORT => res.status(201).send(RESORT))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteRESORT(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateRESORT(req.params.id, req.body).then(RESORT => res.json(RESORT))
    })   

    module.exports = router