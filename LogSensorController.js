const express = require('express');
const { listaSensores } = require('./LogSensorDao');
const router = express.Router()
const LogSensorService = require('./LogSensorService')

router.get('/log-sensores', (req, res) => {
    LogSensorService.todosSensores((erro,sensores)=>{
      if(erro)
        res.status(500).send(erro);
      else
        if(sensores.length == 0) 
         res.sendStatus(404); 
        else
            res.json(sensores);
    });
});

router.get('/log-sensores/:id', (req, res) => {
     LogSensorService.sensorEncontrado(req.params.id,(erro,sensor)=>{
        if(erro)
          res.status(500).send(erro);
        else if(sensor){
            res.json(sensor)
        } else{
            res.sendStatus(404)
        }
        
      })
});



module.exports =  router