const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/activated_at_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let activated_at = "/api/activated_at/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(activated_at)
            .type('form')
            .send({})
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});