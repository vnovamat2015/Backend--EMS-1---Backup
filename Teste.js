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
//  let activities = []
// // Use Array.isArray() para verificar se um objeto é um array ou não.
//  typeof(activities)
//  "object"
//  Array.isArray(activities);
//  true
// //O exemplo a seguir define um array bidimensional que vamos chamar de activities.
//  activities = [['Work',9],['Eat',1],['Commute',2],['Play',1],['Sleep',7]];
// //Para mostrar o array activities no console, use o método console.table() da seguinte forma:
//     console.log(activities);
    
// for(let i = 0; i< activities.length;i++){
//     // get the size of the inner array
//     var innerArrayLength = activities[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++){
//         console.log('[' + i +',' + j + ']) = ' + activities[i[j]]);
//     }
// }
// const today =  Date()
//     console.log(today)
////////////////////////////////////
var timestamp = new Date()
console.log(timestamp)
// 2022-04-13T01:30:38.452Z
var timestamp = Date()
console.log(timestamp)
// Tue Apr 12 2022 22:30:38 GMT-0300 (Horário Padrão de Brasília)
var datetime = new Date();
console.log(datetime);
// 2022-04-13T01:30:38.470Z
var datetime = Date();
console.log(datetime);
//Tue Apr 12 2022 22:30:38 GMT-0300 (Horário Padrão de Brasília)
///////////////////////////////////

var agora = now()
console.log(agora)

// var dataInicio = new Date();
// console.log("Data de inicio new Date() = " + dataInicio);
// setTimeout(function(){ 
//     var dataTermino = new Date(); 
//     var diferencaTempo = dataTermino.getTime() - dataInicio.getTime();
//     console.log("Data de término new Date() = " + dataTermino);
//     console.log("Diferença de tempo = " + diferencaTempo);
// }, 5000);


// var dataParse = Date.parse ("2022-04-10");
// console.log(dataParse);

