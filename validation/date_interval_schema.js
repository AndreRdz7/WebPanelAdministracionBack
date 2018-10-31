const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        start_date: joi.date().required(),
        end_date: joi.date().required(),
        status: joi.string().valid('in_service','out_of_service').required()
    })
}