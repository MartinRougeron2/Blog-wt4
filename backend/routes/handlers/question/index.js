import createQuestion from './create';
import updateQuestion from './put';
import deleteQuestion from './delete';
import {getQuestion, getQuestions} from './get';
import upvoteQuestion from 'utils';

export default {
    post: createQuestion,
    put: updateQuestion,
    delete: deleteQuestion,
    get: getQuestions,
    getOne: getQuestion,
    utils: {
        upvoteQuestion,
    }
}
