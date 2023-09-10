import Joi from 'joi'

export const createUserSchema = Joi.object({

    name: Joi.string()
    .min(2)
    .max(50)
    .messages({
        'any.required':'name is required'
    }),


    email: Joi.string()
    .required()
    .email({
        minDomainSegments:2})
    .messages({
            'any.required':'email is required'
        }),


    password: Joi.string()
    .required()
    .min(8)
    .max(35)
    .alphanum()
    .messages({
        'any.required':'password is required'
    }),

    

    image: Joi.string()
    .required()
    .uri(),


}) 