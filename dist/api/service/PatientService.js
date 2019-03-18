"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Patient = require("../data/models").Patient;
var Comment = require("../data/models").comments;

var PatientService = function () {
    function PatientService() {
        _classCallCheck(this, PatientService);
    }

    _createClass(PatientService, null, [{
        key: "createAPatient",
        value: async function createAPatient(request) {
            var patient = null;
            try {
                //get current time
                request.body.patient_no = Date.now().toString();
                patient = await Patient.create(request.body);
            } catch (err) {
                console.log('Error is ', err);
                PatientService.produceError('Unable to create patient', 400);
            }
            if (patient) return patient;
            PatientService.produceError('Unable to create patient', 400);
        }
    }, {
        key: "fetchPatient",
        value: async function fetchPatient(patient_no) {
            var patient = null;
            try {
                patient = await Patient.findOne({
                    where: {
                        patient_no: patient_no
                    },
                    include: [{
                        model: Comment,
                        as: 'comment'
                    }]
                });
            } catch (err) {
                console.log('Error is ', err);
                PatientService.produceError('Unable to fetch patient', 400);
            }
            if (patient) return patient;
            PatientService.produceError('Unable to fetch this patient', 400);
        }
    }, {
        key: "updatePatient",
        value: async function updatePatient(request) {
            var patient = null;
            var patient_no = request.body.patient_no;

            try {
                patient = await Patient.findOne({
                    where: {
                        patient_no: patient_no
                    }
                });
                patient.update(request.body);
                patient.save();
            } catch (err) {
                console.log('Error is ', err);
                PatientService.produceError('Unable to update patient', 400);
            }
            if (patient) return patient;
            PatientService.produceError('Unable to update this patient', 400);
        }
    }, {
        key: "produceError",
        value: function produceError(message, status) {
            var err = new Error(message);
            err.status = status;
            throw err;
        }
    }]);

    return PatientService;
}();

exports.default = PatientService;