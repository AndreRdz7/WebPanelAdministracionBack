const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/stop_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let stop = "/api/stop/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(stop)
            .type('form')
            .send({
                "name": "los fuertes",
                "longitude": "20.34",
                "latitude": "-38.3709274",
                "description": "fuertes de loreto y guadalupe donde el comandante ignacio zaragoza"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});