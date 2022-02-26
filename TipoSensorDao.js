const { ConnectionFactory } = require("./conectorFactor");

class TipoSensorDao {

    constructor() {
        this.connectionFactory = new ConnectionFactory(); 
    }
  // get('tipos-sensores')
    listaSensores(callback) {
                this.connectionFactory.getConnection(function(err, connection) {
            if(err){
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query(`select id,nome  from tiposensor`, [], function(err, sensores) {
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
      // get('tipos-sensores/id')
    sensorEncontrado(id,callback) {
        
        this.connectionFactory.getConnection(function(err, connection) {
            if(err){
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query(`select id,nome  from tiposensor where id = ?`, [id], function(err, sensores) {
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

 //post('/tipos-sensores')
 cadastrarSensor(sensor, callback) {
    this.connectionFactory.getConnection(function(err, connection) {
        if(err) {
            if(connection)
                connection.release();
            callback(err);
        } else {
            connection.query('INSERT INTO tiposensor(id,nome) VALUES(?,?)', 
            [sensor.id, sensor.nome],
            function(errors) {
                connection.release();
                callback(errors);
            });
        }
    });
};

// put('/tipos-sensores/:id')
atualizarSensor(id, sensor, callback) {
    this.connectionFactory.getConnection(function(err, connection) {
        if(err) {
            if(connection)
                connection.release();
            callback(err);

        } else {
            connection.query('UPDATE tiposensor SET id=?, nome=? WHERE id = ?', 
            [sensor.id, sensor.nome],
            function(errors) {
                connection.release();
                callback(errors);
            });
        }
    });
}

//delete('/tipos-sensores/:id')
excluirSensor(id, callback) {
    this.connectionFactory.getConnection(function(err, connection) {
        if(err) {
            if(connection)
                connection.release();
            callback(err);
        } else {
            connection.query('DELETE FROM tiposensor WHERE id = ?', 
            [id],
            function(errors) {
            connection.release();
                callback(errors);
            });
        }
    });
}
};

   exports.TipoSensorDao = TipoSensorDao;