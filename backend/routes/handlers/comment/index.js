import createComment from './create';
import {getComment, getComments} from './get';
import updateComment from './put';
import deleteComment from './delete';

export default {
    post: createComment,
    get: getComments,
    getOne: getComment,
    put: updateComment,
    delete: deleteComment,
    utils: {
    }
}
