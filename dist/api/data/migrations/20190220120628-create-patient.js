'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      patient_no: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      phone_number: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      blood_group: {
        type: Sequelize.STRING
      },
      genotype: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      marital_status: {
        type: Sequelize.STRING
      },
      known_allergies: {
        type: Sequelize.STRING
      },
      known_ailment: {
        type: Sequelize.STRING
      },
      known_medications: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      state_origin: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Patients');
  }
};