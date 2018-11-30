const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/activated_at_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let activated_at = "/api/activated_at";
// Mocha POST testing to expect a HTTP 200 response
describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(activated_at)
        .type('form')
        .send({})
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});