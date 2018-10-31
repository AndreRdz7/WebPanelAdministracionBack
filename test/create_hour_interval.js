const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/hour_interval_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let hour_interval = "/api/hour_interval";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(hour_interval)
        .type('form')
        .send({
                "start_time": "10:00",
                "end_time": "11:30",
                "frequency": "00:30"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});