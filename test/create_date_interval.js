const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/date_interval_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let date_interval = "/api/date_interval";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(date_interval)
        .type('form')
        .send({
                "start_date": "1/12/2018",
                "end_date": "2/12/2018",
                "status": "in-service"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});