const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/bracelet_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let bracelet = "/api/bracelet/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(bracelet)
            .type('form')
            .send({
                "ticket_id": "1",
                "tour_id": "1",
                "activated_at_id": "1",
                "status": "hop-on"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});