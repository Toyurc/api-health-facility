'use strict';

module.exports = function (sequelize, DataTypes) {
  var comments = sequelize.define('comments', {
    comment_desc: DataTypes.STRING,
    patient_no: DataTypes.STRING
  }, {});
  comments.associate = function (models) {
    // associations can be defined here
  };
  return comments;
};