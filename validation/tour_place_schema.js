const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        tour_id: joi.number().positive().integer().required(),
        place_id: joi.number().positive().integer().required()
    })
}