const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/price_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let price = "/api/price";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(price)
        .type('form')
        .send({
                "ticket_type_id": "1",
                "tour_id": "1",
                "amount": "10"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});