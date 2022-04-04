n=0
setInterval(() => {
   const getRandomInteregerInclusive = (min,max) =>
    Math.floor(Math.random () * (max - min + 1 )) + min   
    const logSensor=[
                     ['2022-02-15 12:15', '2','30.9'],
                     ['2021-03-05 12:40','1','0.0'],
                     ['2022-09-05 10:15', '3','999.8'],
                     ['2021-08-15 12:15', '3','1010.9'],
                     ['2021-09-05 12:25', '3','1010.0'],
                     ['2021-09-05 12:15', '4','70.0']
                    ];
     if (n==6){  n=0 }
   const today = new Date()   
   console.log(today)          
   const getlogSensor =()=>
    logSensor[getRandomInteregerInclusive(0,logSensor.length -1)]
     robo(logSensor[n][0],logSensor[n][1],logSensor[n++][2] )
      },2000);

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
