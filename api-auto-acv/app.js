require('dotenv').config();
const express = require('express');
const OpenApiValidator = require('express-openapi-validator');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Routes pour les véhicules
const vehiculesRouter = require('./routers/vehicles');
app.use('/vehicules', vehiculesRouter);

// Routes pour les sources d'énergie
const powerSourcesRouter = require('./routers/powerSources');
app.use('/sourcesEnergies', powerSourcesRouter);

// Routes pour les utilisateurs
const usersRouter = require('./routers/users');
app.use('/users', usersRouter);

// Routes pour les mixsEnergetiques
const mixsEnergetiquesRouter = require('./routers/mixsEnergetiques');
app.use('/mixsEnergetiques', mixsEnergetiquesRouter);

// Routes pour les tiquetsVehicules
const ticketsVehiculesRouter = require('./routers/tiquetsVehicules');
app.use('/tiquetsVehicules', ticketsVehiculesRouter);

// Middleware to validate the request and response against the OpenAPI schema
app.use(
    OpenApiValidator.middleware({
        apiSpec: './openApi.yml',
        validateResponses: true,
        ignoreUndocumented: true
    })
);

module.exports = app;
