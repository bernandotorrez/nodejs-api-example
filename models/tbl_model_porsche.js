/* jshint indent: 2 */
const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const Joi = require('@hapi/joi');

const TblModelPorsche = connection.define('tbl_model_porsche', {
  id_model: {
    type: DataTypes.INTEGER(14),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  desc_model: {
    type: DataTypes.STRING(70),
    allowNull: true
  },
  status_del: {
    type: DataTypes.INTEGER(1),
    allowNull: true
  }
}, {
  tableName: 'tbl_model_porsche',
  timestamps: false
});

const validateModelSearch = (data) => {
  // Input Validation
  const schema = Joi.object({
    q: Joi.string().min(1).required()
  });

  const result = schema.validate(data);

  return result;
  // Input Validation
};

module.exports.TblModelPorsche = TblModelPorsche;
module.exports.validateModelSearch = validateModelSearch;
