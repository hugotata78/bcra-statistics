const axios = require('axios')
require('dotenv').config()

module.exports = {
    async currencyConverter(req, res) {
        try {
            const { to, from, amount } = req.params
            const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, {
                headers: {
                    apiKey: process.env.API_KEY
                }
            })
            res.status(200).json(response.data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async getSymbols(req, res) {
        try {
            const { source } = req.params
            const response = await axios.get(`https://api.apilayer.com/exchangerates_data/symbols`,{
                headers: {
                    apiKey: process.env.API_KEY
                }
            }
            )
            res.status(200).json(response.data)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
