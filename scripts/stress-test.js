//

import http from 'k6/http';
import { visitHomePage } from '../outils/auth.js';
import { sleep } from 'k6';

//Stages
export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 0 },
  ],
};


export default function () {

    visitHomePage();

    sleep(1);

}
