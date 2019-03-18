'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comment = require("../data/models").comments;

var CommentService = function () {
    function CommentService() {
        _classCallCheck(this, CommentService);
    }

    _createClass(CommentService, null, [{
        key: 'createComment',
        value: async function createComment(request) {
            var comment = null;
            try {
                //get time
                request.body.reg_no = Date.now().toString();
                comment = await Comment.create(request.body);
            } catch (err) {
                console.log(err);
                CommentService.produceError('Unable to add comment at this time', 400);
            }
            if (comment) return comment;
            CommentService.produceError('Unable to add comment at this time', 400);
        }
    }, {
        key: 'produceError',
        value: function produceError(message, status) {
            var err = new Error(message);
            err.status = status;
            throw err;
        }
    }]);

    return CommentService;
}();

exports.default = CommentService;