'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patient = sequelize.define('Patient', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    blood_group: DataTypes.STRING,
    genotype: DataTypes.STRING,
    religion: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    known_allergies: DataTypes.STRING,
    known_ailment: DataTypes.STRING,
    known_medications: DataTypes.STRING,
    state_origin: DataTypes.STRING,
    occupation: {
      type: DataTypes.STRING
    },
    patient_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });
  Patient.associate = (models) => {
        Patient.hasMany(models.comments, {
          foreignKey: 'patient_no',
          as: 'comment'
        });
      };
  return Patient;
};