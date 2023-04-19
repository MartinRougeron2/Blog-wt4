import createAnswer from './create';
import {handleGetAnswer, handleGetAnswers} from './get';
import updateAnswer from './put';
import deleteAnswer from './delete';
import handleApproveAnswer from 'utils';

export default {
    post: createAnswer,
    get: handleGetAnswers,
    getOne: handleGetAnswer,
    put: updateAnswer,
    delete: deleteAnswer,
    utils: {
        handleApproveAnswer,
    }
}
