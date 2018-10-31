const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        tour_id: joi.number().positive().integer().required(),
        mural_id: joi.number().positive().integer().required(),
        capacity: joi.number().integer().required(),
        sold_tickets: joi.number().integer().required(),
        status: joi.string().valid('in_service','out_of_service').required()
    })
}