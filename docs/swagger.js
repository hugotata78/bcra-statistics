const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config()


const swaggerDefinition = {
    
        openapi: '3.0.2',
        info: {
            title: 'Dólar API',
            description: 'API Documentation Dólar',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:4000`,
            },
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: "header",
                    name:'apiKey'
                },
            },     	
        },
      
};

const swaggerOptions = {
	swaggerDefinition,
	apis: ['./routes/*.js'],
}; 

module.exports = swaggerJSDoc(swaggerOptions);