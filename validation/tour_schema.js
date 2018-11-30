const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        name : joi.string().min(1).required(),
        image_path: joi.string().min(1).required(),
        description: joi.string().min(1).required()
    })
}