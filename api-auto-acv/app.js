const express = require('express')
const app = express()

app.use(express.json())

//routes pour les véhicules
const vehiculesRouter = require('./routers/vehicles');
app.use('/vehicules', vehiculesRouter);
//routes pour les sources d'énergie
const powerSourcesRouter = require('./routers/powerSources');
app.use('/powerSources', powerSourcesRouter);

module.exports = app
