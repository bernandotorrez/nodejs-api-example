/* jshint indent: 2 */

const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');

const TblUser = connection.define('tbl_user_new', {
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  gender: {
    type: DataTypes.ENUM('M', 'F'),
    allowNull: false
  },
  date_birth: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  verification: {
    type: DataTypes.ENUM('0', '1'),
    allowNull: true,
    defaultValue: '0'
  },
  api_token: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER(1),
    allowNull: true,
    defaultValue: '1'
  }
}, {
  tableName: 'tbl_user_new',
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['password', 'api_token']
    }
  }
});

const generateAuthKey = (data) => {
  // Generate JWT Token
  const jwtSign = {
    _email: data.email,
    _phone: data.phone,
    _date_birth: data.date_birth,
    _isAdmin: false
  };

  const token = jwt.sign(jwtSign, process.env.JWT_PRIVATE_KEY);

  return token;
  // Generate JWT Token
};

const validateLogin = (data) => {
  // Input Validation
  const schema = Joi.object({
    email: Joi.string().min(6).required(),
    password: Joi.string().min(8).required()
  });

  const result = schema.validate(data);

  return result;
  // Input Validation
};

const validateRegister = (data) => {
  // Input Validation
  const schema = Joi.object({
    email: Joi.string().email().min(6).max(150).required(),
    password: Joi.string().min(8).max(50).required(),
    gender: Joi.string().min(1).max(1).pattern(new RegExp('[FM]')).required(),
    phone: Joi.string().min(10).max(14).pattern(new RegExp('^[0-9]+$')).required(),
    date_birth: Joi.date().required(),
    name: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(3).max(150).required()
  });

  const result = schema.validate(data);

  return result;
  // Input Validation
};

module.exports.TblUser = TblUser;
module.exports.generateAuthKey = generateAuthKey;
module.exports.validateLogin = validateLogin;
module.exports.validateRegister = validateRegister;
