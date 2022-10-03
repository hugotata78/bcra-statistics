const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const response = await axios.get('https://api.bluelytics.com.ar/v2/latest')
    res.json(response.data)
})

module.exports = app