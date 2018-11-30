const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/bus_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let bus = "/api/bus";

// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(bus)
        .type('form')
        .send({
                "tour_id": "1",
                "mural_id": "1",
                "capacity": "50",
                "sold_tickets": "0",
                "status": "in-service"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});