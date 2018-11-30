const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/tour_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let tour = "/api/tour/1";
// Mocha PUT testing to expect a HTTP 200 response
describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(tour)
            .type('form')
            .send({
                "name": "Puebla fascinante",
                "image_path": "src/img.png",
                "description": "este tour esta padrisimo, deja te explico porque, fijate que te hace un recorrido...jiji"
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});