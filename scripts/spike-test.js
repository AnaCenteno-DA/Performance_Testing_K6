//
import http from 'k6/http';
import { check, sleep } from 'k6';


//Stages = cambio brusco de trafico
export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '10s', target: 100 },
    { duration: '30s', target: 100 },
    { duration: '10s', target: 5 },
  ],
};

export default function () {

  const response = http.get('https://blazedemo.com/');

  check(response, {
    'Status es 200': (r) => r.status === 200,
  });

  sleep(1);

}