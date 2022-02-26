const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const port = 2000
app.use(bodyParser.json())
app.use(cors())


const sensorController = require('./SensorController.js');
const tipoSensorController = require('./TipoSensorController.js');
const logSensorController = require('./LogSensorController.js');

app.use('/',sensorController)
app.use('/',tipoSensorController)
app.use('/',logSensorController)

app.listen(port, () => {

      console.log("O servidor rodando porta 2000: http://localhost:2000",)
       });
