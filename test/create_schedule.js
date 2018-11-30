const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/schedule_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let schedule = "/api/schedule";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(schedule)
        .type('form')
        .send({
                "date_interval_id": "1",
                "hour_interval_id": "1",
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});