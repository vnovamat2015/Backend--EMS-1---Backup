// //var myHeaders = new Headers();

// var myHeaders = new fetch.Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "id": 6,
//   "nome": "Abacaxi"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("localhost:2000/tipos-sensores/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:2000/tipos-sensores/',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": 7,
    "nome": "Xuxu"
  })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


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
/// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx