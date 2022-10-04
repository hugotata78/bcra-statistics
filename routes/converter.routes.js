const { Router } = require('express')
const { currencyConverter, convertAllcurrencies } = require('../controllers/converter.controllers')
const router = Router()

router.get('/:source/:target/:quantity', currencyConverter)
router.get('/all/:source',convertAllcurrencies)

module.exports = router