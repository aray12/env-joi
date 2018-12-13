'use strict';

const Joi = require('joi');

module.exports.validate = callback => {
  const schema = callback(Joi);
  const { error, value } = Joi.validate(process.env, schema, {
    stripUnknown: true,
  });
  if (error) throw new Error(error);
  return value;
};
