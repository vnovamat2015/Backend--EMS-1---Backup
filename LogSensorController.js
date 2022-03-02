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
          //  res.sendStatus(404)
          res.status(404).send('Log não encontrado')
        }
        
      })
});

router.post('/log-sensores', (req, res) =>{
  LogSensorService.cadastrarSensor(req.body,erro =>{
      if(erro)
          res.status(500).send(erro);
      else
          res.sendStatus(201);
  });
});

  router.put('/log-sensores/:id',(req,res) =>{
    LogSensorService.atualizarSensor(req.params.id,req.body,err =>{
        if(err && err.status == 404)
         res.sendStatus(404);
        else  if(err && err.errno == 1451)
         res.sendStatus(400);
         else  if(err)
          res.sendStatus(500);
        else
         res.sendStatus(200);
    })  
});  

router.delete('/log-sensores/:id',(req,res) =>{
  LogSensorService.excluirSensor(req.params.id,(err) =>{
      if(err && err.status == 404)
          res.status(404).send(err);
      else  if(err && err.errno == 1451)
          res.sendStatus(400);
      else  if(err)
          res.sendStatus(500);
      else
          res.sendStatus(200);
  })
});
module.exports =  router