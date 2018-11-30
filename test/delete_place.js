const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/place_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let place = "/api/place/1";
// Mocha DELETE testing to expect a HTTP 200 response
describe('DELETE Request', () => {
    let del_resp;
    it('makes a delete call ', async () => {
        del_resp = await baseURL.delete(place);

        await (console.log(del_resp.body));
    });

    it('asserts that the response code is 204',async()=>{
        await (expect(del_resp.status).to.eql(204));
    });
});