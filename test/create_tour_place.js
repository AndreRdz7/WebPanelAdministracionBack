const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/tour_place_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let tour_place = "/api/tour_place";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(tour_place)
        .type('form')
        .send({
                "tour_id": "1",
                "place_id": "1"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});