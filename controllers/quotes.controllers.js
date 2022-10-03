const axios = require("axios")

module.exports = {
    async getQuotes(req,res){
        try {
            const quotes = await axios.get('https://api.bluelytics.com.ar/v2/latest')
            res.status(200).json(quotes.data)
        } catch (error) {
            res.status(500).json({error})
        }
    },
    async lastPrice( req,res){
        try {
            const quotes = await axios.get('https://api.bluelytics.com.ar/json/last_price')
            res.status(200).json(quotes.data)
        } catch (error) {
            res.status(500).json({error})
        }
    },
    async getQuoteHistory(req,res){
        try {
            const { days } = req.query 
            const record = await axios.get(`https://api.bluelytics.com.ar/v2/evolution.json?days=${days || 10}`)
            console.log(record.data.length)
            res.status(200).json(record.data)
        } catch (error) {
            res.status(500).json({error})
        }
    },
    async getQuotesByName(req,res){
        try {
            const { name } = req.query
            if(!name) return res.status(400).json({msg:'El parametro nombre es requerido!'})
            const quotes = await axios.get('https://api.bluelytics.com.ar/v2/latest')
            res.status(200).json(quotes.data[name])
        } catch (error) {
            res.status(500).json({error})
        }
    }
}