const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        company_id : joi.number().integer().integer().required(),
        user_id: joi.number().integer().integer().required(),
        sub_total: joi.number().positive().integer().required(),
        total: joi.number().positive().required()
    })
}