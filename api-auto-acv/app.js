require('dotenv').config();
const express = require('express')
const OpenApiValidalidator = require('express-openapi-validator');
const app = express()

app.use(express.json())

//routes pour les véhicules
const vehiculesRouter = require('./routers/vehicles');
app.use('/vehicules', vehiculesRouter);
//routes pour les sources d'énergie
const powerSourcesRouter = require('./routers/powerSources');
app.use('/sourcesEnergies', powerSourcesRouter);
//routes pour les utilisateurs
const usersRouter = require('./routers/users');
app.use('/users', usersRouter);
//middleware
//Middleware to validate the request and response against the OpenAPI schema
app.use(
    OpenApiValidalidator.middleware({
        apiSpec: './openApi.yml',
        validateResponses: true,
        ignoreUndocumented : true
    })
);

//routes pour les mixsEnergetiques
const mixsEnergetiquesRouter = require('./routers/mixsEnergetiques');
app.use('/mixsEnergetiques', mixsEnergetiquesRouter);

module.exports = app
