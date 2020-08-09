/* jshint indent: 2 */
const {
  DataTypes
} = require('sequelize');
const connection = require('../config/database');
const Joi = require('@hapi/joi');

const ViewTypeModelPorsche = connection.define('view_type_model', {
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
  }
}, {
  tableName: 'view_type_model',
  timestamps: false
});

const validateTypeModelSearch = (data) => {
  // Input Validation
  const schema = Joi.object({
    id: Joi.string().min(1).required(),
    q: Joi.string().min(1).required()
  });

  const result = schema.validate(data);

  return result;
  // Input Validation
};

const validateTypeModelGetId = (data) => {
  // Input Validation
  const schema = Joi.object({
    id: Joi.string().min(1).required()
  });

  const result = schema.validate(data);

  return result;
  // Input Validation
};

module.exports.ViewTypeModelPorsche = ViewTypeModelPorsche;
module.exports.validateTypeModelSearch = validateTypeModelSearch;
module.exports.validateTypeModelGetId = validateTypeModelGetId;
