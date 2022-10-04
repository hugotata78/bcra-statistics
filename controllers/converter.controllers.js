const axios = require('axios')
require('dotenv').config()

module.exports ={
    async currencyConverter(req, res) {
        try {
            const { source, target, quantity } = req.params
            const response = await axios.get(`http://api.valuta.money/v1/quotes/${source}/${target}/json?quantity=${quantity}&key=${process.env.API_KEY}`)
            res.status(200).json(response.data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async convertAllcurrencies(req,res){
        try {
            const { source } = req.params
            const response = await axios.get(`http://api.valuta.money/v1/full/${source}/json?key=${process.env.API_KEY}`)
            res.status(200).json(response.data)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}