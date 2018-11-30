const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        name : joi.string().min(1).required(),
        full_name: joi.string().min(1).required(),
        phone_number: joi.string().min(10).required(),
        street: joi.string().min(1).required(),
        postal_code: joi.string().min(5).required(),
        rfc: joi.string().min(10).required(),
        ieps: joi.number().positive().required(),
        iva: joi.number().positive().required(),
        latitude: joi.number().allow(-90,90).required(),
        longitude: joi.number().allow(-180,180).required()
    })
}