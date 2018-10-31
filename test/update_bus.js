const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/bus_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let bus = "/api/bus/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(bus)
            .type('form')
            .send({
                "tour_id": "1",
                "mural_id": "2",
                "capacity": "50",
                "sold_tickets": "0",
                "status": "in-service"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});