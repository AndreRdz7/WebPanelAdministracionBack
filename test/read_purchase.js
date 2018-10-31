const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/purchase_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let purchase = "/api/purchase";

describe('First Request to Get Purchases',()=>{
    let res;
    it("See Response", async function () {
        res = await baseURL.get(purchase); //Sending the GET request
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