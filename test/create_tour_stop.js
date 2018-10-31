const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/tour_stop_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let tour_stop = "/api/tour_stop";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(tour_stop)
        .type('form')
        .send({
                "tour_id": "1",
                "stop_id": "1"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});