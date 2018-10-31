const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/ticket_type_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let ticket_type = "/api/ticket_type";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(ticket_type)
        .type('form')
        .send({
                "name": "adulto"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});