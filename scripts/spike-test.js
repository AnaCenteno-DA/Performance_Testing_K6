//
import http from 'k6/http';
import { visitHomePage } from '../outils/auth.js';
import { sleep } from 'k6';

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

    visitHomePage();

    sleep(1);

}