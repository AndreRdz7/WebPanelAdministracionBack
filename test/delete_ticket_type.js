const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/ticket_type_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let ticket_type = "/api/ticket_type/1";
// Mocha DELETE testing to expect a HTTP 200 response
describe('DELETE Request', () => {
    let del_resp;
    it('makes a delete call ', async () => {
        del_resp = await baseURL.delete(ticket_type);

        await (console.log(del_resp.body));
    });

    it('asserts that the response code is 204',async()=>{
        await (expect(del_resp.status).to.eql(204));
    });
});