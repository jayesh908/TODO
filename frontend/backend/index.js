const express = require("express")
const app = express()
const mongoose = require("mongoose")
const  route  = require("./router/route")
const dotenv = require("dotenv").config()
const dburl = process.env.dburl
const port = process.env.port
const cors = require("cors")

mongoose.connect(dburl).then(() => {
    console.log("database connected")
})
    .catch((err) => {
        console.log(err)
    })

app.use(cors())
app.use(express.json())
app.use(route)
app.listen(port, () => {
    console.log("Running...")
})