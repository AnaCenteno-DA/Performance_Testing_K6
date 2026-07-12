import http from 'k6/http';

//funciones para validar y espera de VU
import { check, sleep } from 'k6';

//options = como ejecutar la prueba
export const options = {
  vus: 1,

  //iterations: 1,
  duration: '30s',
};


// el corazon del script
export default function () {
   //peticion al http
  const response = http.get('https://blazedemo.com/');

  //check de validacion 
  check(response, {
    'Status es 200': (r) => r.status === 200,
  });

  sleep(1);
}