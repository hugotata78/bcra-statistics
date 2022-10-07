const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config()


const swaggerDefinition = {
    
        openapi: '3.0.2',
        info: {
            title: 'Dollar API',
            description: 'API documentation quote and conversion of the dollar and other currencies',
            version: '1.0.0',
        },
        servers: [
            {
                url:`${process.env.SERVER}:${process.env.PORT || 4000}` ,
            },
        ],
        components:{
            schemes:['http','https']
        }
      
};

const swaggerOptions = {
	swaggerDefinition,
	apis: ['./routes/*.js'],
}; 

module.exports = swaggerJSDoc(swaggerOptions);