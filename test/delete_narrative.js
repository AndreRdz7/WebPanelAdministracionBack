const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/narrative_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let narrative = "/api/narrative/2";

describe('DELETE Request', () => {
    let del_resp;
    it('makes a delete call ', async () => {
        del_resp = await baseURL.delete(narrative);

        await (console.log(del_resp.body));
    });

    it('asserts that the response code is 204',async()=>{
        await (expect(del_resp.status).to.eql(204));
    });
});