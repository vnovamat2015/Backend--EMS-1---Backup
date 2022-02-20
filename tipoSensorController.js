const express = require('express');
const { listaSensores } = require('./sensorDao');
const router = express.Router()
const tipoSensorService = require('./tipoSensorService')

router.get('/tipos-sensores', (req, res) => {
    service.todosSensores((erro,tipossensores)=>{
      if(erro)
        res.status(500).send(erro);
      else
        if(tipossensores.length == 0) 
         res.sendStatus(404); 
        else
            res.json(tipossensores);
    });
});