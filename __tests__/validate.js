'use strict';

const { validate } = require('../config');

describe('validate', () => {
  it('should pass if environment variable is defined', () => {
    process.env.FOO = 'is defined';

    const result = validate(joi =>
      joi.object({
        FOO: joi.string().required(),
      })
    );

    expect(result).toEqual({ FOO: 'is defined' });
  });

  it('should fail if environment variable is undefined', () => {
    expect(() => {
      validate(joi =>
        joi.object({
          BAR: joi.string().required(),
        })
      );
    }).toThrow();
  });
});