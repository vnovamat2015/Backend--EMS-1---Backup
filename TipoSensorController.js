const express = require('express');
const { listaSensores } = require('./TipoSensorDao');
const router = express.Router()
const TipoSensorService = require('./TipoSensorService')

router.get('/tipos-sensores', (req, res) => {
    TipoSensorService.todosSensores((erro,tiposSensores)=>{
      if(erro)
        res.status(500).send(erro);
      else
        if(tiposSensores.length == 0) 
         res.sendStatus(404); 
        else
            res.json(tiposSensores);
    });
});

router.get('/tipos-sensores/:id', (req, res) => {
     TipoSensorService.sensorEncontrado(req.params.id,(erro,sensor)=>{
        if(erro)
          res.status(500).send(erro);
        else if(sensor){
            res.json(sensor)
        } else{
            res.sendStatus(404)
        }
        
      })
});
router.post('/tipos-sensores', (req, res) =>{
   TipoSensorService.cadastrarSensor(req.body,erro =>{
         if(erro)
          res.status(500).send(erro);
      else
          res.sendStatus(201);
   
  });     
});

router.put('/tipos-sensores/:id',(req,res) =>{
  TipoSensorService.atualizarSensor(req.params.id,req.body,err =>{
      if(err && err.status == 404)
       res.sendStatus(404);
      else  if(err && err.errno == 1451)
       res.sendStatus(400);
      else  if(err)
       res.sendStatus(500);
      else 
       res.sendStatus(200);
  })
})  
router.delete('/tipos-sensores/:id',(req,res) =>{
  TipoSensorService.excluirSensor(req.params.id,(err) =>{
      if(err && err.status == 404)
          res.status(404).send(err);
      else  if(err && err.errno == 1451)
          res.sendStatus(400);
      else  if(err)
          res.sendStatus(500);
      else
          res.sendStatus(200);
  })
})
module.exports =  router