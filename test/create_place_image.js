const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/place_image_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let place_image = "/api/place_image";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(place_image)
        .type('form')
        .send({
                "place_id": "1",
                "image_id": "1"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});