'use strict';

module.exports = function (sequelize, DataTypes) {
  var HealthFacility = sequelize.define('HealthFacility', {
    name: DataTypes.STRING,
    reg_no: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {});
  HealthFacility.associate = function (models) {
    // associations can be defined here
  };
  return HealthFacility;
};