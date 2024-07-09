require('dotenv').config();
const express = require('express')
const OpenApiValidalidator = require('express-openapi-validator');
const app = express()

// const crypto = require('crypto');
// const secretKey = crypto.randomBytes(64).toString('hex');
// console.log(secretKey);

// // Récupérer la valeur de la variable d'environnement SECRET
// const secret = process.env.SECRET;

// // Afficher la valeur de la variable d'environnement SECRET
// console.log("La valeur de la variable d'environnement SECRET est :", secret);

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
