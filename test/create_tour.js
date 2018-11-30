const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/tour_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let tour = "/api/tour";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(tour)
        .type('form')
        .send({
                "name": "Puebla fascinante",
                "image_path": "src/img.png",
                "description": "este tour esta padrisimo, deja te explico porque, fijate que te hace un recorrido..."
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});