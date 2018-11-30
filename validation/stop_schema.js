const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        name: joi.string().min(1).required(),
        latitude: joi.number().allow(-90,90).required(),
        longitude: joi.number().allow(-180,180).required(),
        description: joi.string().min(1).required()
    })
}