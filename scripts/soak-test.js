//

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '2m', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {

  const response = http.get('https://blazedemo.com/');

  check(response, {
    'Status es 200': (r) => r.status === 200,
  });

  sleep(1);

}