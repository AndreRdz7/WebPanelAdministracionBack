const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/schedule_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let schedule = "/api/schedule/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a PUT call ', async () => {
        put_resp = await baseURL.put(schedule)
            .type('form')
            .send({
                "date_interval_id": "1",
                "hour_interval_id": "2",
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});