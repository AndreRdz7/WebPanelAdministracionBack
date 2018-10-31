const supertest = require('supertest');
const expect = require('chai').expect;
const schema = require('../validation/company_schema');
const joi = require('joi');


let baseURL = supertest("https://reqres.in");
let narrative = "/api/company/1";

describe('PUT Request', () => {
    let put_resp;
    it('makes a POST call ', async () => {
        put_resp = await baseURL.put(narrative)
            .type('form')
            .send({
                "name": "Estrella Verde",
                "full_name": "Estrella Verde S.A. de C.V.",
                "phone_number": "12345456277",
                "street": "Calle Callerous",
                "postal_coce": "72767",
                "rfc": "h23r09hv29h32d09hhj",
                "ieps": "11",
                "iva": ".161",
                "latitude": "20.3148972",
                "longitude": "-34.4917203984",
            })
            .set('Accept', '/application/\json/');

        await (console.log(put_resp.body));
    });
});