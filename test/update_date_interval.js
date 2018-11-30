const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/date_interval_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let date_interval = "/api/date_interval/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(date_interval)
            .type('form')
            .send({
                "start_date": "2/12/2018",
                "end_date": "2/12/2018",
                "status": "in-service"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});