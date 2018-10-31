const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        place_id: joi.number().positive().integer().required(),
        image_id: joi.number().positive().integer().required()
    })
}