const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/place_image_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let place_image = "/api/place_image/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(place_image)
            .type('form')
            .send({
                "place_id": "1",
                "image_id": "2"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});