'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    comment_desc: DataTypes.STRING,
    patient_no: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
  };
  return comments;
};