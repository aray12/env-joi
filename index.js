'use strict';

const Joi = require('joi');

module.exports = callback => {
  const schema = callback(Joi);
  const { error, value } = schema.validate(process.env, {
    stripUnknown: true,
  });
  if (error) throw new Error(error);
  return value;
};
