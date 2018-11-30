const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/hour_interval_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let hour_interval = "/api/hour_interval/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(hour_interval)
            .type('form')
            .send({
                "start_time": "10:00",
                "end_time": "11:30",
                "frequency": "00:29"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});