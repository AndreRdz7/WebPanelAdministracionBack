const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        tour_id: joi.number().positive().integer().required(),
        place_id: joi.number().positive().integer().required()
    })
}