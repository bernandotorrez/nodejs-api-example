/* jshint indent: 2 */
const {
  DataTypes
} = require('sequelize');
const connection = require('../config/database');

const TblTypePorsche = connection.define('tbl_type_porsche', {
  id_type: {
    type: DataTypes.INTEGER(14),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
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
  }
}, {
  tableName: 'tbl_type_porsche',
  timestamps: false
});

module.exports.TblTypePorsche = TblTypePorsche;
