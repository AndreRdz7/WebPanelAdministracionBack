const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/ticket_type_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let ticket_type = "/api/ticket_type/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(ticket_type)
            .type('form')
            .send({
                "name": "inapam",
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});