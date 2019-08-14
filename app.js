const express = require('express')
const app = express()
const cors= require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3005



app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res,next) => {
    res.send('ALL YOU PEOPLE HEAR ME NOW! RUN TRACKER APP (c)2019')
})


app.get('/', (req,res,next) => {
    res.send('ALL YOU PEOPLE HEAR ME NOW! RUN TRACKER APP (c)2019')
})

app.listen(port, () => {
    console.log(`WP NEW WORLD ORDER GOING HARD ON PORT: ${port}`)
})