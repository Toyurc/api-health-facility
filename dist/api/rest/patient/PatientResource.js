'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _PatientService = require('../../service/PatientService');

var _PatientService2 = _interopRequireDefault(_PatientService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/patients', function (request, response, next) {
    _PatientService2.default.createAPatient(request).then(function (result) {
        response.status(201);
        response.json(result);
    }).catch(function (err) {
        return next(err);
    });
});
router.get('/patients/:patient_no', function (request, response, next) {
    _PatientService2.default.fetchPatient(request.params.patient_no).then(function (result) {
        response.status(200);
        response.json(result);
    }).catch(function (err) {
        next(err);
    });
});
router.put('/patients', function (request, response, next) {
    _PatientService2.default.updatePatient(request).then(function (result) {
        response.status(200);
        response.json(result);
    }).catch(function (err) {
        next(err);
    });
});

exports.default = router;