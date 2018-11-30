const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/bracelet_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let bracelet = "/api/bracelet";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(bracelet)
        .type('form')
        .send({
                "ticket_id": "1",
                "tour_id": "1",
                "activated_at_id": "1",
                "status": "hop-on"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});