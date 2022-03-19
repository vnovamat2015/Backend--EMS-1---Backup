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

  setInterval(() => {
   const getRandomInteregerInclusive = (min,max) =>
    Math.floor(Math.random () * (max - min + 1 )) + min
   const tipoSensores=['chuva','temperatura','pressão','umidade']
   const getTipoSensor =()=>
    tipoSensores[getRandomInteregerInclusive(0,tipoSensores.length -1)]
    console.log(getTipoSensor())},100000);