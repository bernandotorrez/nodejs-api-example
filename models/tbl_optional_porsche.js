/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_optional_porsche', {
    id_optional: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    id_cat_optional: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    code_optional: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    desc_optional: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_curr: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    price: {
      type: 'DOUBLE(20,2)',
      allowNull: false
    },
    status_del: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'tbl_optional_porsche'
  });
};
