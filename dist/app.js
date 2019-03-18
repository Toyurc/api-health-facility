'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _PatientResource = require('./api/rest/patient/PatientResource');

var _PatientResource2 = _interopRequireDefault(_PatientResource);

var _HealthFacilityResource = require('./api/rest/patient/HealthFacilityResource');

var _HealthFacilityResource2 = _interopRequireDefault(_HealthFacilityResource);

var _CommentResource = require('./api/rest/patient/CommentResource');

var _CommentResource2 = _interopRequireDefault(_CommentResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'dotenv/config';
var app = (0, _express2.default)();

//Resource


app.use((0, _bodyParser.json)());
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));
app.use((0, _bodyParser.urlencoded)({
    extended: true
}));

app.use('/api/v1', _PatientResource2.default);
app.use('/api/v1', _HealthFacilityResource2.default);
app.use('/api/v1', _CommentResource2.default);

app.use(function (request, response, next) {
    var error = new Error('Invalid Resource');
    error.status = 400;
    next(error);
});

// setup custom error handler
app.use(function (err, request, response, next) {
    console.log(err);
    response.status(err.status || 400);
    response.json({
        message: err.message
    });
});

var port = process.env.PORT || 8000;
var server = _http2.default.createServer(app);

server.listen(port, function () {
    console.log('App listening on port ' + port);
});