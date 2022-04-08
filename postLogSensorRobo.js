
setInterval(() => {
   const getRandomInteregerInclusive = (min,max) =>
    Math.floor(Math.random () * (max - min + 1 )) + min   
    const today = new Date()   
    console.log(today) 
    const logSensor=[
                     ['2022-02-15 12:15', '2','30.1'],
                     ['2021-03-05 12:40','1',' 00.2'],
                     ['2022-09-05 10:15', '3','999.3'],
                     ['2021-08-15 12:15', '3','1010.4'],
                     ['2021-09-05 12:25', '3','1010.5'],
                     ['2021-09-05 12:15', '4','70.6']

                                      ];
     //if (n==6){  n=0 }  
     let aleatorio = getRandomInteregerInclusive (0,6)   
   const getlogSensor =()=>
    logSensor[getRandomInteregerInclusive(0,logSensor.length -1)]
     robo(logSensor[aleatorio][0],logSensor[aleatorio][1],logSensor[aleatorio][2] )
      },5000);
     
    function robo(a,b,c){

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
