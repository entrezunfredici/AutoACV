const express = require('express')
const app = express()

app.use(express.json())

//add routes for routers
const vehiculesRouter = require('./routers/vehicles');
app.use('/vehicules', vehiculesRouter);

module.exports = app
