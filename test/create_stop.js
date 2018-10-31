const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/company_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let company = "/api/company";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(company)
        .type('form')
        .send({
                "name": "fuertes",
                "longitude": "20.34",
                "latitude": "-38.3709274",
                "description": "fuertes de loreto y guadalupe donde el comandante ignacio zaragoza"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});