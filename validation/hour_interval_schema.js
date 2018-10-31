const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        start_time: joi.timestamp().required(),
        end_time: joi.timestamp().required(),
        frequencyº: joi.timestamp().required()
    })
}