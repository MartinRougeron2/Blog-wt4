const createAnswer = require('./create');
const {handleGetAnswer, handleGetAnswers} = require('./get');
const updateAnswer = require('./put');
const deleteAnswer = require('./delete');
const {handleApproveAnswer, handleUpvoteAnswer} = require('./utils');

module.exports = {
    post: createAnswer,
    get: handleGetAnswers,
    getOne: handleGetAnswer,
    put: updateAnswer,
    delete: deleteAnswer,
    utils: {
        handleApproveAnswer,
        handleUpvoteAnswer
    }
}
