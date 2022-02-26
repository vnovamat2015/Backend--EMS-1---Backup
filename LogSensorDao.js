const { ConnectionFactory } = require("./conectorFactor");

class LogSensorDao {

    constructor() {
        this.connectionFactory = new ConnectionFactory(); 
    }
  // get('log-sensores')
    listaSensores(callback) {
                this.connectionFactory.getConnection(function(err, connection) {
            if(err){
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query(`select id,dataHora, idSensor, valor  from logsensores`, [], function(err, sensores) {
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
      // get('log-sensores/id')
    sensorEncontrado(id,callback) {
        
        this.connectionFactory.getConnection(function(err, connection) {
            if(err){
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query(`select id,dataHora,idSensor, valor  from logsensores where id = ?`, [id], function(err, sensores) {
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
};

    exports.LogSensorDao = LogSensorDao;