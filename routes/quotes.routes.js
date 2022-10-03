const { Router } = require('express')
const { getQuotes, lastPrice, getQuoteHistory, getQuotesByName } = require('../controllers/quotes.controllers')
const router = Router()

router.get('/',getQuotes)
router.get('/last_price',lastPrice)
router.get('/record',getQuoteHistory)
router.get('/search',getQuotesByName)

module.exports = router