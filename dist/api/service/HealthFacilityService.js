'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HealthFacility = require("../data/models").HealthFacility;

var HealthFacilityService = function () {
    function HealthFacilityService() {
        _classCallCheck(this, HealthFacilityService);
    }

    _createClass(HealthFacilityService, null, [{
        key: 'createHealthFacility',
        value: async function createHealthFacility(request) {
            var healthFacility = null;
            try {
                //get time
                request.body.reg_no = Date.now().toString();
                healthFacility = await HealthFacility.create(request.body);
            } catch (err) {
                console.log(err);
                HealthFacilityService.produceError('Unable to create Health Facility at this time', 400);
            }
            if (healthFacility) return healthFacility;
            HealthFacilityService.produceError('Unable to create Health Facility at this time', 400);
        }
    }, {
        key: 'authenticateHealthFacility',
        value: async function authenticateHealthFacility(reg_no) {
            var healthFacility = null;
            try {
                healthFacility = await HealthFacility.findOne({
                    where: {
                        reg_no: reg_no
                    }
                });
            } catch (err) {
                console.log(err);
                HealthFacilityService.produceError('Cannot verify health facility', 400);
            }
            if (healthFacility) return healthFacility;
            HealthFacilityService.produceError('Unable to create Health Facility at this time', 400);
        }
    }, {
        key: 'produceError',
        value: function produceError(message, status) {
            var err = new Error(message);
            err.status = status;
            throw err;
        }
    }]);

    return HealthFacilityService;
}();

exports.default = HealthFacilityService;