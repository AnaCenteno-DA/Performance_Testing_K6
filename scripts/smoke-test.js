import { visitHomePage } from '../outils/auth.js';
import { sleep } from 'k6';

//options = como ejecutar la prueba
export const options = {
  vus: 1,

  //iterations: 1,
  duration: '30s',
};


export default function () {

    visitHomePage();

    sleep(1);

}