const express = require("express")
const router = express.Router()
const queries = require("./queries_TERRATORY.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(TERRATORY => res.status(200).send(TERRATORY))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(TERRATORY => res.status(200).send(TERRATORY))
    })
    router.post("/", (req, res, next) => {
        queries.createTERRATORY(req.body).then(TERRATORY => res.status(201).send(TERRATORY))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteTERRATORY(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateTERRATORY(req.params.id, req.body).then(TERRATORY => res.json(TERRATORY))
    })   

    module.exports = router