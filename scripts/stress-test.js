//

import http from 'k6/http';
import { check, sleep } from 'k6';

//Stages
export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 0 },
  ],
};


//Funcion principal
export default function () {

  const response = http.get('https://blazedemo.com/');


  //Proceso de chequeo
  check(response, {
    'Status es 200': (r) => r.status === 200,
  });


  //Proceso de pause
  sleep(1);

}

