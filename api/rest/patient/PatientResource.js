import {
    Router
} from 'express';
import PatientService from '../../service/PatientService';

const router = Router();

router.post('/patients', (request, response, next) => {
    PatientService.createAPatient(request)
        .then(result => {
            response.status(201);
            response.json(result);
        }).catch(err => next(err));
});
router.get('/patients/:patient_no', (request, response, next) => {
    PatientService.fetchPatient(request.params.patient_no)
    .then(result => {
        response.status(200);
        response.json(result);
    }).catch(err => {
        next(err);
    });
});

export default router;