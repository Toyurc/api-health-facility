import {Router} from 'express';
import HealthFacilityService from '../../service/HealthFacilityService';


const router = Router();

router.post('/hospital', (request, response, next) => {
    HealthFacilityService.createHealthFacility(request)
        .then(result => {
            response.status(201);
            response.json(result);
        })
        .catch(err => next(err));
});

router.get('/hospital/:reg_no', (request, response, next) => {
    HealthFacilityService.authenticateHealthFacility(request.params.reg_no)
        .then(result => {
            response.status(200);
            response.json(result);
        })
        .catch(err => {
            next(err)
        })
});

export default router;