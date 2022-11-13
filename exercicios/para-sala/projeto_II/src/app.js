require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const db = require('./database/mongooseConnect')
const cozinhaRoutes = require("./routes/cozinhaRoutes")
const reservaRoutes = require('./routes/reservaRoutes')

app.use(express.json())
app.use(cors())
app.use("/", cozinhaRoutes)
app.use("/", reservaRoutes)

db.connect();


module.exports = app