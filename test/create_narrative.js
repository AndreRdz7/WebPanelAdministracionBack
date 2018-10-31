const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/narrative_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let narrative = "/api/narrative";

describe('POST Request',()=>{
    let post_resp;
    it('makes a POST call ',async ()=>{
        post_resp = await baseURL.post(narrative)
        .type('form')
        .send({
                "audio_path": "src/audio1.mp3",
                "description": "abababababababbabababababababbabababababababbababababqbabqbbqbbqbqbabbababababqabababababababab"
        })
        .set('Accept','/application/\json/');

        await (console.log(post_resp.body));
    });
});