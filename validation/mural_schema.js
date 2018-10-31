const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        title : joi.string().min(1).required(),
        author_name: joi.string().min(1).required(),
        author_last_name: joi.string().min(1).required(),
        description: joi.string().min(10).required()
    })
}