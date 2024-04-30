const Joi = require("joi");
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        name:Joi.string().required(),
        enrollment_no:Joi.string().required(),
        description:Joi.string().required(),
        cgpa:Joi.string().required(),
        address:Joi.string().required(),
        age:Joi.string().required().min(0),
        image:Joi.string().allow("",null),
    }).required(),
});

