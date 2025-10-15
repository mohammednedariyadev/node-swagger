const express = require('express');
const app = express();
const { swaggerSpec, swaggerUi } = require('./api/swagger');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', require('./api/api.routes'));

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Something went wrong!');
})

module.exports = app;