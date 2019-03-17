const HealthFacility = require("../data/models").HealthFacility;

export default class HealthFacilityService {

    static async createHealthFacility(request) {
        let healthFacility = null;
        try {
            //get time
            request.body.reg_no = Date.now().toString();
            healthFacility = await HealthFacility.create(request.body);
        } 
        catch (err) {
            console.log(err);
            HealthFacilityService.produceError('Unable to create Health Facility at this time', 400)
        }
        if (healthFacility) return healthFacility;
        HealthFacilityService.produceError('Unable to create Health Facility at this time', 400)

    }

    static async authenticateHealthFacility(reg_no) {
        let healthFacility = null
        try {
            healthFacility = await HealthFacility.findOne({
                where: {
                    reg_no: reg_no
                }
            })
        }
        catch (err) {
            console.log(err);
            HealthFacilityService.produceError('Cannot verify health facility', 400)
        }
        if (healthFacility) return healthFacility;
        HealthFacilityService.produceError('Unable to create Health Facility at this time', 400)
    }

    static produceError(message, status) {
        const err = new Error(message);
        err.status = status;
        throw err;
    }
}