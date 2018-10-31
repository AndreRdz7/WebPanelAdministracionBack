const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        name : joi.string().min(1).required()
    })
}