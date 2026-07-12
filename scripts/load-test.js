//Ejemplo de Load Test
import http from 'k6/http';

//funciones para validar y espera de VU
import { check, sleep } from 'k6';


//Stages 
export const options = {
  stages: [
    { duration: '10s', target: 5 },    //Ramp-up
    { duration: '20s', target: 5 },    //Load estable
    { duration: '10s', target: 0 },    //Ramp-down
  ],

  //Uso de Threshold = reglas de aceptación de performance.
  // Definen las condiciones que k6 debe cumplir para considerar la prueba exitosa.
  // Si un threshold falla, la prueba se marca como FAILED. 
  
   thresholds: {
    http_req_duration: [
      'p(95)<500',
    ],

    http_req_failed: [
      'rate<0.01',
    ],
  },

// Thresholds (umbrales): límites de aceptación definidos para determinar
// si una prueba de rendimiento cumple los criterios esperados o falla.

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