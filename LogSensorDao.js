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


//post('/sensores')
cadastrarSensor(sensor, callback) {
    this.connectionFactory.getConnection(function(err, connection) {
        if(err) {
            if(connection)
                connection.release();
            callback(err);
        } else {
            connection.query('INSERT INTO logsensores(id,dataHora,idSensor,valor) VALUES(?,?,?,?)', 
            [sensor.id, sensor.dataHora, sensor.idSensor, sensor.valor],
            function(errors) {
                connection.release();
                callback(errors);
            });
        }
    });
}

  // put('/log-sensores/:id')
  atualizarSensor(id, sensor, callback) {
    this.connectionFactory.getConnection(function(err, connection) {
        if(err) {
            if(connection)
                connection.release();
            callback(err);

        } else {
            connection.query('UPDATE sensores SET idTipoSensor=?, coordenadas=?, numSerie=? WHERE id = ?', 
            [sensor.idTipoSensor, sensor.coordenadas, sensor.numSerie, id],
            function(errors) {
                connection.release();
                callback(errors);
            });
        }
    });
}
 //delete('/log-sensores/:id')
 excluirSensor(id, callback) {
    this.connectionFactory.getConnection(function(err, connection) {
        if(err) {
            if(connection)
                connection.release();
            callback(err);
        } else {
            connection.query('DELETE FROM logsensores WHERE id = ?', 
            [id],
            function(errors) {
            connection.release();
                callback(errors);
            });
        }
    });
}



};
    exports.LogSensorDao = LogSensorDao;