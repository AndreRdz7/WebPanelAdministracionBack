const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        ticket_id : joi.number().positive().integer().required(),
        tour_id: joi.number().positive().integer().required(),
        activated_at_id: joi.number().positive().integer().required(),
        status: joi.string().valid('hop_on','hop_off').required()
    })
}