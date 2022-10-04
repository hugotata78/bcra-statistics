//Get price dollar an euro

/**
 * @swagger
 * /api/quotes:
 *  get:
 *     summary: Return price of the dollar (official and blue) and the euro (official and blue)
 *     tags: [Quotes]
 *     responses:
 *       200:
 *          description: Ok
 *       400:
 *         description: Bad request
 *       500:
 *          description: Internal server error
 */

//Get last price of the dollar

/**
 * @swagger
 * /api/quotes/last_price:
 *  get:
 *     summary: Returns last price of the dollar
 *     tags: [Quotes]
 *     responses:
 *       200:
 *          description: Ok
 *       400:
 *         description: Bad request
 *       500:
 *          description: Internal server error
 */

//Get dollar rate history

/**
 * @swagger
 * /api/quotes/record:
 *  get:
 *     summary: Returns dollar price history according to the number of days passed by query params
 *     tags: [Quotes]
 *     parameters:
 *       - in: query
 *         name: days
 *         schema:
 *          type: integer
 *         description: Number of days to obtain dollar price history
 *     responses:
 *       200:
 *          description: Ok
 *       400:
 *         description: Bad request
 *       500:
 *          description: Internal server error
 */

//Get coin quote by denomination

/**
 * @swagger
 * /api/quotes/search:
 *  get:
 *     summary: Return coin quotation by denomination
 *     tags: [Quotes]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *          type: string
 *         required: true
 *         description: Name of the currency from which you want to obtain a quote
 *     responses:
 *       200:
 *          description: Ok
 *       400:
 *         description: Bad request
 *       500:
 *          description: Internal server error
 */