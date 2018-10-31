const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/ticket_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let ticket = "/api/ticket";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(ticket)
        .type('form')
        .send({
                "purchase_id": "1",
                "price_id": "1",
                "client_name": "Choko",
                "client_last_name": "Man",
                "client_age": "10",
                "tour_date": "1/12/2018",
                "qr_code": "qrcodegen/api/usr=?ea",
                "total": "100.0"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});