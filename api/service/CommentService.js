const Comment = require("../data/models").comments;

export default class CommentService {

    static async createComment(request) {
        let comment = null;
        try {
            //get time
            request.body.reg_no = Date.now().toString();
            comment = await Comment.create(request.body);
        } 
        catch (err) {
            console.log(err);
            CommentService.produceError('Unable to add comment at this time', 400)
        }
        if (comment) return comment;
        CommentService.produceError('Unable to add comment at this time', 400)
    }

    static produceError(message, status) {
        const err = new Error(message);
        err.status = status;
        throw err;
    }
}