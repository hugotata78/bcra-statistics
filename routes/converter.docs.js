//Currency converter

/**
 * @swagger
 * /api/converter/{to}/{from}/{amount}:
 *  get:
 *     summary: Currency converter Review symbols documentation for more information about the parameters that should be included in this route
 *     tags: [Converter]
 *     parameters:
 *       - in: path
 *         name: to
 *         schema:
 *          type: string
 *         required: true
 *         description: target currency (EUR,USD,ARS,MXN,...)
 *       - in: path
 *         name: from
 *         schema:
 *          type: string
 *         required: true
 *         description: base currency (EUR,USD,ARS,MXN,...)
 *       - in: path
 *         name: amount
 *         schema:
 *          type: integer
 *         required: true
 *         description: Quantity to convert
 *     responses:
 *       200:
 *          description: ok
 *       400:
 *          description: Bad request
 *       500:
 *          description: Internal server error
 */ 


//currency acronyms

/**
 * @swagger
 * /api/converter/symbols:
 *  get:
 *     summary: currency acronyms
 *     tags: [Converter]
 *     responses:
 *       200:
 *          description: ok
 *       400:
 *          description: Bad request
 *       500:
 *          description: Internal server error
 */ 
