'use strict';

const Joi = require('@hapi/joi');

module.exports = callback => {
  const schema = callback(Joi);
  const { error, value } = Joi.validate(process.env, schema, {
    stripUnknown: true,
  });
  if (error) throw new Error(error);
  return value;
};
