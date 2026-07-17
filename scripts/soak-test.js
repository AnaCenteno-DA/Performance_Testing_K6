//

import http from 'k6/http';
import { visitHomePage } from '../outils/auth.js';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '2m', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {

    visitHomePage();

    sleep(1);

}