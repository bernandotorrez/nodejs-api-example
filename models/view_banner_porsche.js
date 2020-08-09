/* jshint indent: 2 */
const {
  DataTypes
} = require('sequelize');
const connection = require('../config/database');

const ViewBannerPorsche = connection.define('view_banner_porsche', {
  id_banner_porsche: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: '0',
    primaryKey: true
  },
  id_type: {
    type: DataTypes.INTEGER(11),
    allowNull: false
  },
  banner_url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    defaultValue: '1'
  },
  desc_type: {
    type: DataTypes.STRING(70),
    allowNull: true
  },
  price_type: {
    type: 'DOUBLE(20,2)',
    allowNull: false
  },
  desc_model: {
    type: DataTypes.STRING(70),
    allowNull: true
  }
}, {
  tableName: 'view_banner_porsche',
  timestamps: false
});

module.exports.ViewBannerPorsche = ViewBannerPorsche;
