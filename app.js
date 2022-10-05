const express = require('express')
const axios = require('axios')
const cors = require('cors')
const morgan = require('morgan')
const indexRoutes = require('./routes')
const app = express()

//setting
app.set('port', process.env.PORT || 4000)
app.set('server', 'Servidor')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const corsOptions = {
    origin: process.env.SERVER,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use(morgan('dev'))

console.log(process.env.SERVER, process.env.API_KEY)
//routes
app.use('/api',indexRoutes)

module.exports = app