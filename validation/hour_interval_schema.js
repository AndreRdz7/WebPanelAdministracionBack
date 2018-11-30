const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        start_time: joi.date().required(),
        end_time: joi.date().required(),
        frequencyº: joi.date().required()
    })
}