const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/image_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let image = "/api/image/1";

describe('DELETE Request', () => {
    let del_resp;
    it('makes a delete call ', async () => {
        del_resp = await baseURL.delete(image);

        await (console.log(del_resp.body));
    });

    it('asserts that the response code is 204',async()=>{
        await (expect(del_resp.status).to.eql(204));
    });
});