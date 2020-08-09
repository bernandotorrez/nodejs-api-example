/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_colour_porsche', {
    id_colour: {
      type: DataTypes.INTEGER(14),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_type: {
      type: DataTypes.STRING(14),
      allowNull: true
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
    id_curr: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    price: {
      type: "DOUBLE(20,2)",
      allowNull: true
    },
    status_del: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'tbl_colour_porsche'
  });
};
