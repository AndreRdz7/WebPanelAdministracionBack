const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/narrative_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let narrative = "/api/narrative/3";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(narrative)
            .type('form')
            .send({
                "audio_path": "this is an audio path",
                "description": "ababbabadfjfbasklbksbfekfbalsejfakefaskeufbskefabsefjyasefjbfkjhsebakjehfbaksjehfwjef"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});