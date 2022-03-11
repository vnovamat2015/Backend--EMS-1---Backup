const dao = require ('./TipoSensorDao.js')
const { TipoSensorDao } = require('./tipoSensorDao.js')

exports.sensorEncontrado = function(idsensor,callback){
   tipoSensorDao.sensorEncontrado(idsensor,callback)
}
 // get tipos-sensores
exports.todosSensores = function(callback){
tipoSensorDao.listaSensores(callback)
}
// post tipos-sensores
exports.cadastrarSensor = (sensor,callback) => {
   tipoSensorDao.cadastrarSensor(sensor,callback) 
 }
 //put tipos-sensores
exports.atualizarSensor = (id,body,callback) => {
   tipoSensorDao.sensorEncontrado(id,(err, sensor) => {
     if(err){
         callback(err); 
     } 
     else if(sensor){
      tipoSensorDao.atualizarSensor(id,body,callback);
     }
       else {
         callback({status:404,message:'Sensor não encontrado.'})
     }
   }) 
 }
// delet tipos-sensores
exports.excluirSensor = (id,callback) => {
   tipoSensorDao.sensorEncontrado(id,(err, sensor) => {
     if(err){
         callback(err);
     } else if(sensor){
       tipoSensorDao.excluirSensor(id, callback);
     } else {
       callback({status:404,message:'Sensor não encontrado.'})
     }
   });
 }
const tipoSensorDao = new TipoSensorDao();