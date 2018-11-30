const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        ticket_type_id : joi.number().integer().integer().required(),
        tour_id: joi.number().integer().integer().required(),
        amount: joi.number().positive().required()
    })
}