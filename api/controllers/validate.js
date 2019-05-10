const Joi = require('@hapi/joi')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../helpers/config');
const newUser = require('../helpers/helper')

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));
//const hashPassword = password => bcrypt.hashSync(req.body.password, 8);

const comparePassword = (hPassword, password) => bcrypt.compareSync(password, hPassword);
/**
 *
 * @param {email} string
 * @returns {token} string
 **/

// create a token
const Token = (email) => {
  const token = jwt.sign({ user: email }, config.secret, {
    expiresIn: 86400 // expires in 24 hours
  }); return token;
};

/**
 * @param {user} object
 */
//define validation schema
const validateSignUp = (user) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().regex(/^[a-zA-Z]+$/).trim().required(),//required
    lastName: Joi.string().regex(/^[a-zA-Z]+$/).trim().required(),//required
    email: Joi.string().email().required(),//email must be a valid email string and required
    address: Joi.string().trim().required(),//required
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).trim().min(8).max(30).required(),
  });
  return Joi.validate(user, schema);
};

/**
 * @param{details} string
 */
const validateLogIn = (info) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().trim().required(),//required
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).trim().required(),
  });
  return Joi.validate(info, schema);
};

 /**
  *
  * @param {user} object
  */

module.exports = {
  validateLogIn,
  validateSignUp,
  Token,
  hashPassword,
  comparePassword,
};
