/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_banner_porsche', {
    id_banner_porsche: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tbl_type_porsche',
        key: 'id_type'
      }
    },
    banner_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'tbl_banner_porsche'
  });
};
