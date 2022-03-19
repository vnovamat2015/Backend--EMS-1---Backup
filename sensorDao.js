const Pool = require("mysql/lib/Pool");
const { ConnectionFactory } = require("./conectorFactor");


class SensorDao {
    constructor() {
        this.connectionFactory = new ConnectionFactory(); 
    }
  // get('sensores')
    listaSensores(callback) {
                this.connectionFactory.getConnection(function(err, connection) {
            if(err){
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query(`select id,idTipoSensor,coordenadas, numSerie  from sensores`, [], function(err, sensores) {
                    connection.release();
                    if(err) {
                        callback(err);
                    } else {
                        callback(err, sensores);
                    }
                });
            }
        });
    }
      // get('sensores/id')
    sensorEncontrado(id,callback) {
                this.connectionFactory.getConnection(function(err, connection) {
            if(err){
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query(`select id,idTipoSensor,coordenadas,numSerie  from sensores where id = ?`, [id], function(err, sensores) {
                    connection.release();
                    if(err) {
                        callback(err);
                    } else {
                        callback(err, sensores[0]);
                    }
                });
            }
        });
    }
    //post('/sensores')
    cadastrarSensor(sensor, callback) {
        this.connectionFactory.getConnection(function(err, connection) {
            if(err) {
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query('INSERT INTO sensores(id,idTipoSensor,coordenadas,numSerie) VALUES(?,?,?,?)', 
				[sensor.id, sensor.idTipoSensor, sensor.coordenadas, sensor.numSerie],
                function(errors) {
                    connection.release();
                    callback(errors);
                });
            }
        });
    }
   // put('/sensores/:id')
    atualizarSensor(id, sensor, callback) {
        this.connectionFactory.getConnection(function(err, connection) {
            if(err) {
                if(connection)
                    connection.release();
                callback(err);

            } else {
                connection.query('UPDATE sensores SET idTipoSensor=?, coordenadas=?, numSerie=? WHERE id = ?', 
				[sensor.idTipoSensor, sensor.coordenadas, sensor.numSerie,id],
                function(errors) {
                    connection.release();
                    callback(errors);
                });
            }
        });
    }
    //delete('/sensores/:id')
    excluirSensor(id, callback) {
        this.connectionFactory.getConnection(function(err, connection) {
            if(err) {
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query('DELETE FROM sensores WHERE id = ?', 
				[id],
                function(errors) {
                connection.release();
                    callback(errors);
                });
            }
        });
    }
  
};
exports.SensorDao = SensorDao;