const express = require('express')
const axios = require('axios')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

//setting
app.set('port', process.env.PORT || 400)
app.set('server', 'Servidor')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

module.exports = app