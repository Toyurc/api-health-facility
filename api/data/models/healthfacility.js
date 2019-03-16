'use strict';
module.exports = (sequelize, DataTypes) => {
  const HealthFacility = sequelize.define('HealthFacility', {
    name: DataTypes.STRING,
    reg_no: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {});
  HealthFacility.associate = function(models) {
    // associations can be defined here
  };
  return HealthFacility;
};