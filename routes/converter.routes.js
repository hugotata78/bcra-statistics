const { Router } = require('express')
const { currencyConverter, getSymbols } = require('../controllers/converter.controllers')
const router = Router()

router.get('/:to/:from/:amount', currencyConverter)
router.get('/',getSymbols)

module.exports = router
