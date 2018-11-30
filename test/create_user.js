const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/user_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let user = "/api/user";
// Mocha POST testing to expect a HTTP 200 response

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(user)
        .type('form')
        .send({
                "user_type": "administrator",
                "name": "Rayu",
                "last_name": "Amin",
                "email": "rayu@er.com",
                "birthdate": "1/1/1980",
                "password": "bimbo",
                "postal_code": "77777",
                "phone_number": "2222121212"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});