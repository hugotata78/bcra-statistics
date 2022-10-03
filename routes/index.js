const { Router } = require('express')
const quotesRoutes = require('./quotes.routes')
const router = Router()

router.use('/quotes', quotesRoutes)

module.exports = router