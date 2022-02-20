const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const port = 2000
app.use(bodyParser.json())
app.use(cors())


const sensoresController = require('./sensoresController.js');

app.use('/',sensoresController)

app.listen(port, () => {

      console.log("O servidor rodando porta 2000: http://localhost:2000",)
       });
