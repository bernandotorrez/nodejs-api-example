/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_category_colour', {
    id_cat: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    desc_cat_colour: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    position_colour: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_del: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'tbl_category_colour'
  });
};
