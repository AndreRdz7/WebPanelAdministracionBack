const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/purchase_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let purchase = "/api/purchase/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(purchase)
            .type('form')
            .send({
                "company_id": "2",
                "user_id": "2",
                "sub_total": "11",
                "total": "110"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});