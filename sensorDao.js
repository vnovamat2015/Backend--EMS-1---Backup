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

/// get tipos-sensores

listAll(callback){
            this.connectionFactory.getConnection(function(err, connection) {
        if(err){
            if(connection)
                connection.release();
            callback(err);
        } else {
            connection.query(`select id,nome`, [], function(err, dados) {
                connection.release();
                if(err) {
                    callback(err);
                } else {
                    callback(err, dados);
                }
            });
        }
    })
};
}






exports.SensorDao = SensorDao;