const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/place_type_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let place_type = "/api/place_type/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(place_type)
            .type('form')
            .send({
                "name": "hotel",
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});