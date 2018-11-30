const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/image_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let imag
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(image)
        .type('form')
        .send({
                "image_path": "src/img12.png",
                "description": "blablablablablablablablablablablalbablablablabla"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});