const Patient = require("../data/models").Patient;
const Comment = require("../data/models").comments;


export default class PatientService {

    static async createAPatient(request) {
        let patient = null;
        try {
            //get current time
            request.body.patient_no = Date.now().toString();
            patient = await Patient.create(request.body);
        } catch (err) {
            console.log('Error is ', err)
            PatientService.produceError('Unable to create patient', 400);
        }
        if (patient) return patient;
        PatientService.produceError('Unable to create patient', 400);
    }
    static async fetchPatient(patient_no) {
        let patient = null;
        try {
            patient = await Patient.findOne({
                where: {
                    patient_no
                },
                include:[{
                    model: Comment,
                    as: 'comment',
                }]
            })
        } catch (err) {
            console.log('Error is ', err);
            PatientService.produceError('Unable to fetch patient', 400);
        }
        if(patient) return patient;
        PatientService.produceError('Unable to fetch this patient', 400)
    }
    
    static async updatePatient(request){
        let patient = null;
        let {patient_no} = request.body;
        try {
            patient = await Patient.findOne({
                where: {
                    patient_no
                }
            })
            patient.update(request.body)
            patient.save();
        } catch (err) {
            console.log('Error is ', err);
            PatientService.produceError('Unable to update patient', 400);
        }
        if(patient) return patient;
        PatientService.produceError('Unable to update this patient', 400)
    }

    static produceError(message, status) {
        const err = new Error(message);
        err.status = status;
        throw err;
    }
}