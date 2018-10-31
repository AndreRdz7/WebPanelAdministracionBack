const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/price_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let price = "/api/price/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a POST call ', async () => {
        put_resp = await baseURL.put(price)
            .type('form')
            .send({
                "ticket_type_id": "2",
                "tour_id": "2",
                "amount": "11"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});