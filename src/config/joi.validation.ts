import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  // PORT
  PORT: Joi.number().default(3002),
  // DB
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  // Client
  CLIENT_URL: Joi.string().optional().default('http://localhost:8080'),
});
