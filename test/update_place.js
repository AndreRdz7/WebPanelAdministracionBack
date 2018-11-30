const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/place_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let place = "/api/place/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(place)
            .type('form')
            .send({
                "place_type_id": "1",
                "narrative_id": "1",
                "name": "catedral",
                "longitude": "0",
                "latitude": "0",
                "description": "la catedral mas extrema de mexico"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});