const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        audio_path : joi.string().min(1).required(),
        description: joi.string().min(50).required()
    })
}