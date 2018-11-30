const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        place_id: joi.number().positive().integer().required(),
        image_id: joi.number().positive().integer().required()
    })
}