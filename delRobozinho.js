
id=0
setInterval(() => {
   const getRandomInteregerInclusive = (min,max) =>
    Math.floor(Math.random () * (max - min + 1 )) + min
   const tipoSensores=['chuva','temperatura','pressão','umidade']
   const getTipoSensorController =()=>
    tipoSensores[getRandomInteregerInclusive(0,tipoSensores.length - 1)]
    delRobo(id++,getTipoSensorController())},2000); 

function delRobo(){
var request = require('request');
var options = {
  'method': 'DELETE',
  'url': 'http://localhost:2000/tipos-sensores/id',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body,id);
});
};

// var requestOptions = {
//     method: 'DELETE',
//     redirect: 'follow'
//   };
  
//   fetch("localhost:2000/tipos-sensores/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// };