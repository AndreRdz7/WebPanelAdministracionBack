const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/tour_stop_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let tour_stop = "/api/tour_stop/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(tour_stop)
            .type('form')
            .send({
                "tour_id": "1",
                "stop_id": "2"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});