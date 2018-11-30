const joi = require('joi');
// attribute validations
module.exports = {
    schema : joi.object().keys({
        name : joi.string().min(1).required()
    })
}