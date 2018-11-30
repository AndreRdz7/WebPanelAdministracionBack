const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/company_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let company = "/api/company";

// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(company)
        .type('form')
        .send({
                "name": "Estrella Roja",
                "full_name": "Estrella Roja S.A. de C.V.",
                "phone_number": "1234545677",
                "street": "Calle Calleros",
                "postal_coce": "72777",
                "rfc": "h23r09hv29h3209hhj",
                "ieps": "10",
                "iva": ".16",
                "latitude": "20.348972",
                "longitude": "-34.497203984",
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});