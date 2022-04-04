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
// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'http://localhost:2000/tipos-sensores/',
//   'headers': {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     "id": 7,
//     "nome": "Xuxu"
//   })
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });


// id=0
// setInterval(() => {
//    const getRandomInteregerInclusive = (min,max) =>
//     Math.floor(Math.random () * (max - min + 1 )) + min
//    const tipoSensores=['chuva','temperatura','pressão','umidade']
//    const getTipoSensorController =()=>
//     tipoSensores[getRandomInteregerInclusive(0,tipoSensores.length - 1)]
//     delRobo(id++,getTipoSensorController())},2000); 
// function delRobo(){
// var request = require('request');
// var options = {
//   'method': 'DELETE',
//   'url': 'http://localhost:2000/tipos-sensores/id',
//   'headers': {
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body,id);
// });
// };
/// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Comando para criar um Array.
 let robo = []
 // Use Array.isArray() para verificar se um objeto é um array ou não.
//  typeof(activities)
//  "object"
//  Array.isArray(activities);
//  true
//O exemplo a seguir define um array bidimensional que vamos chamar de activities.
 robo = [['Work',9],['Eat',1],['Commute',2],['Play',1],['Sleep',7]];
//Para mostrar o array activities no console, use o método console.table() da seguinte forma:
    console.log(robo);
    
// for(let i = 0; i< activities.length;i++){
//     // get the size of the inner array
//     var innerArrayLength = activities[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++){
//         console.log('[' + i +',' + j + ']) = ' + activities[i[j]]);
//     }
// }



