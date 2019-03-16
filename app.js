// import 'dotenv/config';
import express from 'express';
import {json, urlencoded} from 'body-parser';
import logger from 'morgan';
import cors from 'cors';


//Resource
import PatientResource from './api/rest/patient/PatientResource';  
import HealthFacilityResource from './api/rest/patient/HealthFacilityResource';
import CommentResource from './api/rest/patient/CommentResource';


const app = express();

app.use(json());
app.use(cors());
app.use(logger('dev'));
app.use(urlencoded({
    extended: true
}));

app.use('/api/v1', PatientResource);
app.use('/api/v1', HealthFacilityResource);
app.use('/api/v1', CommentResource);

app.use((request, response, next) => {
    let error = new Error('Invalid Resource');
    error.status = 400;
    next(error);
});

// setup custom error handler
app.use((err, request, response, next) => {
    console.log(err);
    response.status(err.status || 400);
    response.json({
        message: err.message
    });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

