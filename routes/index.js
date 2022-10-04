const { Router } = require('express')
const quotesRoutes = require('./quotes.routes')
const converterRoutes = require('./converter.routes')
const router = Router()

router.use('/quotes', quotesRoutes)
router.use('/converter',converterRoutes)

module.exports = router