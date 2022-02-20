const { ConnectionFactory } = require("./conectorFactor");

class SensorDao {

    constructor() {
        this.connectionFactory = new ConnectionFactory(); 
    }
  // get('/tipos-sensores')
    listaSensores(callback) {
                this.connectionFactory.getConnection(function(err, connection) {
            if(err){
                if(connection)
                    connection.release();
                callback(err);
            } else {
                connection.query(`select id,nome  from tipoSensor`, [], function(err, tipossensores) {
                    connection.release();
                    if(err) {
                        callback(err);
                    } else {
                        callback(err, tipossensores);
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