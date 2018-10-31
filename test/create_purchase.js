const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/purchase_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let purchase = "/api/purchase";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(purchase)
        .type('form')
        .send({
                "company_id": "1",
                "user_id": "1",
                "sub_total": "10",
                "total": "100"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});