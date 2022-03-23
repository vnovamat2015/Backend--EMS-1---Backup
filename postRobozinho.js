// setInterval(() => {
//     console.log("Oi, eu sou um robô, e executo infinitamente a cada 1 segundo");
// }, 1000);

 //Math.random(Math.random() * 3)
 //console.log(Math.floor(Math.random() * 3))

// Para incluir o zero e o número aleatorio desejado; 
// 1- no lugar do número aleatorio colocar um parentese 
// 2- dentro subtrair de zero e somar + 1
// 3- e fora do parentese somar + zero
 //console.log(Math.floor(Math.random() * (3 - 0 + 1))) + 0 

//A função  getRandomInteregerInclusive inclui os valores minimo e máximo 
//  const getRandomInteregerInclusive = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min
//    console.log(getRandomInteregerInclusive (3,7))
// setInterval: Cria o intervalo e cada ciclo de tempo determinado 1s =1000 e chama a função getTipoSensorController 
// através da variável tipoSensores = [], com as stringues dos sensores que evocam a função  getRandomInteregerInclusive
// O console.log imprime a cada 1s os valores do array aleatoriamente
  
n=69
setInterval(() => {
   const getRandomInteregerInclusive = (min,max) =>
    Math.floor(Math.random () * (max - min + 1 )) + min
   const tipoSensores=['chuva','temperatura','pressão','umidade']
   const getTipoSensorController =()=>
    tipoSensores[getRandomInteregerInclusive(0,tipoSensores.length -1)]
    robo(n++,getTipoSensorController())},5000); 


    function robo(a,b){
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'http://localhost:2000/tipos-sensores/',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id": a,
          "nome": b
        })
      
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body,a,b);
      });
    }
