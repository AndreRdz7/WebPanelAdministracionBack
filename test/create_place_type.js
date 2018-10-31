const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/place_type_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let place_type = "/api/place_type";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(place_type)
        .type('form')
        .send({
                "name": "recomendacion"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});