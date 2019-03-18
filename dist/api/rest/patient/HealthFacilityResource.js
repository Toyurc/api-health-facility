'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _HealthFacilityService = require('../../service/HealthFacilityService');

var _HealthFacilityService2 = _interopRequireDefault(_HealthFacilityService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/hospital', function (request, response, next) {
    _HealthFacilityService2.default.createHealthFacility(request).then(function (result) {
        response.status(201);
        response.json(result);
    }).catch(function (err) {
        return next(err);
    });
});

router.get('/hospital/:reg_no', function (request, response, next) {
    _HealthFacilityService2.default.authenticateHealthFacility(request.params.reg_no).then(function (result) {
        response.status(200);
        response.json(result);
    }).catch(function (err) {
        next(err);
    });
});

exports.default = router;