/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id_group: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id_company: {
      type: DataTypes.INTEGER(12).UNSIGNED,
      allowNull: true
    },
    branch_id: {
      type: DataTypes.INTEGER(12),
      allowNull: true
    },
    id_dept: {
      type: DataTypes.INTEGER(12),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email_head: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email_cc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    status_pur: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    aproval_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    give_righ_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    login_terakhir: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    sign_head: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_fc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_bod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email_fc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email_bod: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sign_penerima: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_finance: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_accounting: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_pemeriksa1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_pemeriksa2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_pimpinan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_giro1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_giro2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign_penerima_bmk: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email_fa: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    waktu: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    level_access: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    flag_approval_democar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    flag_deligated: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    email_purchase: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    date_create_app_democar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_update_app_democar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remarks_app_democar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    api_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tgl_start_deligate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tgl_end_deligate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tbl_user'
  });
};
