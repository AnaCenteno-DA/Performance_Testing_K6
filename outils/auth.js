import http from 'k6/http';
import { check } from 'k6';


export function visitHomePage() {

    const response = http.get('https://blazedemo.com/');

    check(response, {
        'Status es 200': (r) => r.status === 200,
    });

    return response;
}