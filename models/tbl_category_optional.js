/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_category_optional', {
    id_cat_optional: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    desc_cat_optional: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    position_cat_optional: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status_del: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'tbl_category_optional'
  });
};
