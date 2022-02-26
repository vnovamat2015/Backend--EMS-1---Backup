const dao = require ('./LogSensorDao.js')
const { LogSensorDao } = require('./logSensorDao.js')

exports.sensorEncontrado = function(idsensor,callback){
   logSensorDao.sensorEncontrado(idsensor,callback)
}
 // get sensores
exports.todosSensores = function(callback){
logSensorDao.listaSensores(callback)
}



const logSensorDao = new LogSensorDao();