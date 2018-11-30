const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/tour_schedule_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let tour_schedule = "/api/tour_schedule/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(tour_schedule)
            .type('form')
            .send({
                "tour_id": "1",
                "schedule_id": "2"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});