const { Router } = require('express')
const swaggerUi = require('swagger-ui-express');
const swagger = require('../docs/swagger')
const quotesRoutes = require('./quotes.routes')
const converterRoutes = require('./converter.routes')
const router = Router()

router.use('/quotes', quotesRoutes)
router.use('/converter',converterRoutes)
router.use('/docs',swaggerUi.serve,swaggerUi.setup(swagger))

module.exports = router