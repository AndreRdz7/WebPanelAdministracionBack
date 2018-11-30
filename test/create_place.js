const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/place_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let place = "/api/place";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(place)
        .type('form')
        .send({
                "place_type_id": "1",
                "narrative_id": "1",
                "name": "catedral",
                "longitude": "0",
                "latitude": "0",
                "description": "la catedral mas pro de mexico"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});