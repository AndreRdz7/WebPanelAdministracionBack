const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        purchase_id : joi.number().positive().integer().required(),
        pride_id: joi.number().positive().integer().required(),
        client_name: joi.string().min(1).required(),
        client_last_name: joi.string().min(1).required(),
        client_age: joi.number().positive().required(),
        tour_date: joi.date().required(),
        qr_code: joi.string().min(1).required(),
        total: joi.number().positive().required()
    })
}