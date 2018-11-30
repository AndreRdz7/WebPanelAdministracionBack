const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/narrative_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let narrative = "/api/narrative";
// Multiple Mocha GET testing to expect multiple HTTP 200 responses
describe('First Request to Get Narratives',()=>{
    let res;
    it("See Response", async function () {
        res = await baseURL.get(narrative); //Sending the GET request
        console.log(res.body);
    });

    it('checks that the response was OK',async()=>{
        await (expect(res.status).to.equal(200));
    });

    it('prints length of data array',async()=>{
        await (console.log(res.body.data.length));
    });

    it('gets the id from the array',async()=>{
         for(let i=0;i<res.body.data.length;i++){
            await(console.log(res.body.data[i].id));
         }
    });

});