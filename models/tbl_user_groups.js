/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user_groups', {
    id_group: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    name_grp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apps_access: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tbl_user_groups'
  });
};
