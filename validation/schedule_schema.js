const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        date_interval_id: joi.number().positive().integer().required(),
        hour_interval_id: joi.number().positive().integer().required()
    })
}