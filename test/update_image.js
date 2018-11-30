const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/image_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let image = "/api/image/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(image)
            .type('form')
            .send({
                "image_path": "src/img13.png",
                "description": "blablablablablablablablablablablalbablablablabla"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});