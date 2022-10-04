const { Router } = require('express')
const { currencyConverter, getSymbols } = require('../controllers/converter.controllers')
const router = Router()

router.get('/:from/:to/:amount', currencyConverter)
router.get('/',getSymbols)

module.exports = router
