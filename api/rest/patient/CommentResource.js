import {Router} from 'express';
import CommentService from '../../service/CommentService';


const router = Router();

router.post('/comment', (request, response, next) => {
    CommentService.createComment(request)
        .then(result => {
            response.status(201);
            response.json(result);
        })
        .catch(err => next(err));
})

export default router;