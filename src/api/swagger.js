const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'NodeJs - Swagger',
            version: '1.0.0',
            description: 'Swagger intergration in NodeJs project'
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                },
            },
        },
        tags: [
        {
            name: 'Authentication',
            description: ''
        },
        {
          name: 'User',
          description: '',
        },
    ],
    },
    apis: ['./src/api/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerSpec, swaggerUi,
}