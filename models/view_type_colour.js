/* jshint indent: 2 */
const {
  DataTypes
} = require('sequelize');
const connection = require('../config/database');
const Joi = require('@hapi/joi');

const ViewTypeColour = connection.define('view_type_colour', {
  id_type: {
    type: DataTypes.INTEGER(14),
    allowNull: false,
    defaultValue: '0',
    primaryKey: true
  },
  id_model: {
    type: DataTypes.INTEGER(14),
    allowNull: true
  },
  desc_type: {
    type: DataTypes.STRING(70),
    allowNull: true
  },
  price_type: {
    type: 'DOUBLE(20,2)',
    allowNull: false
  },
  status_del: {
    type: DataTypes.INTEGER(1),
    allowNull: true
  },
  desc_model: {
    type: DataTypes.STRING(70),
    allowNull: true
  },
  id_colour: {
    type: DataTypes.INTEGER(14),
    allowNull: false,
    defaultValue: '0'
  },
  id_cat: {
    type: DataTypes.INTEGER(12),
    allowNull: true
  },
  code_colour: {
    type: DataTypes.STRING(3),
    allowNull: true,
    defaultValue: ''
  },
  desc_colour: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  desc_cat_colour: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  position_colour: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'view_type_colour',
  timestamps: false
});

const validateTypeColourId = (data) => {
  // Input Validation
  const schema = Joi.object({
    id: Joi.string().min(1).required()
  });

  const result = schema.validate(data);

  return result;
  // Input Validation
};

const validateTypeColourIdColour = (data) => {
  // Input Validation
  const schema = Joi.object({
    id: Joi.string().min(1).required(),
    colour: Joi.string().min(1).required()
  });

  const result = schema.validate(data);

  return result;
  // Input Validation
};

module.exports.ViewTypeColour = ViewTypeColour;
module.exports.validateTypeColourId = validateTypeColourId;
module.exports.validateTypeColourIdColour = validateTypeColourIdColour;
