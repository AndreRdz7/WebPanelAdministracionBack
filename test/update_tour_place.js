const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/tour_place_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let tour_place = "/api/tour_place/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(tour_place)
            .type('form')
            .send({
                "tour_id": "1",
                "place_id": "2"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});