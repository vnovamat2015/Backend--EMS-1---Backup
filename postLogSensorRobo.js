
setInterval(() => {
   const getRandomInteregerInclusive = (min,max) =>
    Math.floor(Math.random () * (max - min + 1 )) + min
   //const logSensor=[('2022-09-15 11:25','3','1008.8'),('2021-09-05 12:15', '1','1.0'),
  // ('2022-02-15 12:15', '2','30.9')]
   //console.log(logSensor[0,0])
   const getlogSensor =()=>
    logSensor[getRandomInteregerInclusive(0,logSensor.length -1)]
    robo('2022-09-15 11:25','3','1008.8')},5000); 


    function robo(a,b,c){
        //console.log(a,b,c)
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'http://localhost:2000/log-sensores/',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          
          "dataHora": a,
          "idSensor":b,
          "valor":c
        })
      
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body,a,b,c);
      });
    }
