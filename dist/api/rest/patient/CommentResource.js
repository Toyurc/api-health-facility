'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _CommentService = require('../../service/CommentService');

var _CommentService2 = _interopRequireDefault(_CommentService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/comment', function (request, response, next) {
    _CommentService2.default.createComment(request).then(function (result) {
        response.status(201);
        response.json(result);
    }).catch(function (err) {
        return next(err);
    });
});

exports.default = router;