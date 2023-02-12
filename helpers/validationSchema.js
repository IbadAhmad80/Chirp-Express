const Joi = require('joi')

const validationValues = {
  email: Joi.string()
    .lowercase()
    .pattern(
      new RegExp(
        '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$',
      ),
    )
    .required()
    .messages({
      'string.pattern.base': `email doesn't have a valid value`,
      'string.empty': `email cannot be empty`,
      'any.required': `email is required`,
    }),
  password: Joi.string().lowercase().required().min(6).messages({
    'string.pattern.base': `password doesn't have a valid value`,
    'string.empty': `password cannot be empty`,
    'any.required': `password is required`,
    'string.min': `password length must be at least 6 characters long`,
  }),
  name: Joi.string().lowercase().required().min(3).max(10).messages({
    'string.pattern.base': `name doesn't have a valid value`,
    'string.empty': `name cannot be empty`,
    'any.required': `name is required`,
    'string.min': `name length must be at least 3 characters long`,
    'string.max': `name length cannot exceeds 10 characters`,
  }),
  gender: Joi.string().required().messages({
    'string.empty': `gender cannot be empty`,
    'any.required': `gender is required`,
  }),
}

const registerUserSchema = Joi.object({
  firstName: validationValues.name.messages({
    'string.pattern.base': `firstName doesn't have a valid value`,
    'string.empty': `firstName cannot be empty`,
    'any.required': `firstName is required`,
    'string.min': `firstName length must be at least 3 characters long`,
    'string.max': `firstName length cannot exceeds 10 characters`,
  }),
  lastName: validationValues.name.messages({
    'string.pattern.base': `firstName doesn't have a valid value`,
    'string.empty': `firstName cannot be empty`,
    'any.required': `firstName is required`,
    'string.min': `firstName length must be at least 3 characters long`,
    'string.max': `firstName length cannot exceeds 10 characters`,
  }),
  email: validationValues.email,
  password: validationValues.password,
  gender: validationValues.gender,
  dateOfBirth: Joi.string().required().messages({
    'string.empty': `dateOfBirth cannot be empty`,
    'any.required': `dateOfBirth is required`,
  }),
})

module.exports = {
  registerUserSchema
}
