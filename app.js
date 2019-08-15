const express = require('express')
const app = express()
const cors= require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3005



app.use(cors())
app.use(bodyParser.json())

const USERS = require("./USERS")
app.use("/USERS", USERS)

const TERRATORY = require("./TERRATORY")
app.use("/TERRATORY", TERRATORY)

const RESORT = require("./RESORT")
app.use("/RESORT", RESORT)

const LIFTS = require("./LIFTS")
app.use("/LIFTS", LIFTS)

const RUNS = require("./RUNS")
app.use("/RUNS", RUNS)


app.get('/', (req,res,next) => {
    res.send('ALL YOU PEOPLE HEAR ME NOW! RUN TRACKER APP (c)2019')
})


app.get('/', (req,res,next) => {
    res.send('ALL YOU PEOPLE HEAR ME NOW! RUN TRACKER APP (c)2019')
})

app.listen(port, () => {
    console.log(`WP NEW WORLD ORDER GOING HARD ON PORT: ${port}`)
})