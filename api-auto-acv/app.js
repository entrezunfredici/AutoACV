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
//middleware
app.use(
    OpenApiValidalidator.middleware({
        apiSpec: './openApi.yml',
        validateResponses: true,
        ignoreUndocumented : true
    })
);

module.exports = app
