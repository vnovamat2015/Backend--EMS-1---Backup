const dao = require ('./SensorDao.js')
const { SensorDao } = require('./sensorDao.js')

exports.sensorEncontrado = function(idsensor,callback){
   sensorDao.sensorEncontrado(idsensor,callback)
}
 // get sensores
exports.todosSensores = function(callback){
sensorDao.listaSensores(callback)
}

// post sensores
exports.cadastrarSensor = (sensor,callback) => {
  sensorDao.cadastrarSensor(sensor,callback) 
}
//put sensores
exports.atualizarSensor = (id,body,callback) => {
  sensorDao.sensorEncontrado(id,(err, sensor) => {
    if(err){
        callback(err);
    } 
    else if(sensor){
     sensorDao.atualizarSensor(id,body,callback);
    }
      else {
        callback({status:404,message:'Sensor não encontrado.'})
   
    }
  }) 
}
// delet sensores
exports.excluirSensor = (id,callback) => {
  sensorDao.sensorEncontrado(id,(err, sensor) => {
    if(err){
        callback(err);
    } else if(sensor){
      sensorDao.excluirSensor(id, callback);
    } else {
      callback({status:404,message:'Sensor não encontrado.'})
     // console.log(callback);
    }
  });
}

 exports.todosTiposSensores = async function (){
  const resultado = await TipoSensor.findAll();
 console.log('ESTOU SERVICE',resultado )
  return resultado.map(item => item.dat)
 }

const sensorDao = new SensorDao();

// exports.todosTiposSensores = function(callback) {
// 	sensorDao.listAll(callback);
// }

