const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        // enum, falta probar con comillas
        place_type_id: joi.number().positive().integer().required(),
        narrative_id: joi.number().positive().integer().required(),
        name: joi.string().min(1).required(),
        latitude: joi.number().allow(-90,90).required(),
        longitude: joi.number().allow(-180,180).required(),
        description: joi.string().min(1).required()
    })
}