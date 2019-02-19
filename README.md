# env-joi
Simple environment variable configuration validation

Example

```javascript
const validate = require('env-joi');

module.exports = validate(joi =>
  joi.object({
    SECRET: joi.string().required(),
    SECRET_EXPIRES: joi.string().required(),
  })
);
```
