const dao = require ('./sensorDao.js')
const { SensorDao } = require('./sensorDao.js')

// exports.sensorEncontrado = function(idsensor,callback){
//    sensoresDao.sensorEncontrado(idsensor,callback)
// }
 // get tipossensores
exports.todosSensores = function(callback){
sensorDao.listaSensores(callback)
}


const sensorDao = new SensorDao();

exports.todosTiposSensores = function(callback) {
	sensorDao.listAll(callback);
}