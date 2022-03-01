const dao = require ('./LogSensorDao.js')
const { LogSensorDao } = require('./logSensorDao.js')

exports.sensorEncontrado = function(idsensor,callback){
   logSensorDao.sensorEncontrado(idsensor,callback)
}
 // get log-sensores
exports.todosSensores = function(callback){
logSensorDao.listaSensores(callback)
}

// post log-sensores
exports.cadastrarSensor = (sensor,callback) => {
   logSensorDao.cadastrarSensor(sensor,callback) 
 }

 //put log-ensores
exports.atualizarSensor = (id,body,callback) => {
   logSensorDao.sensorEncontrado(id,(err, sensor) => {
     if(err){
         callback(err);
     } 
     else if(sensor){
      logSensorDao.atualizarSensor(id,body,callback);
     }
       else {
         callback({status:404,message:'Sensor não encontrado.'})
    
     }
   }) 
 }

 // delet log-sensores
exports.excluirSensor = (id,callback) => {
   logSensorDao.sensorEncontrado(id,(err, sensor) => {
     if(err){
         callback(err);
     } else if(sensor){
       logSensorDao.excluirSensor(id, callback);
     } else {
       callback({status:404,message:'Sensor não encontrado.'})
      // console.log(callback);
     }
   });
 }


const logSensorDao = new LogSensorDao();