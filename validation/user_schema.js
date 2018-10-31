const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        // enum, falta probar con comillas
        user_type : joi.string().valid(administrator,client).required(),
        name: joi.string().min(1).required(),
        last_name: joi.string().min(1).required(),
        email: joi.string().email().required(),
        birthdate: joi.date().required(),
        password: joi.string().min(8).required(),
        postal_code: joi.string().min(5).required(),
        phone_number: joi.string().min(10).required()
    })
}