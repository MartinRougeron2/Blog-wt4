const createQuestion = require('./create');
const updateQuestion = require('./put');
const deleteQuestion = require('./delete');
const {getQuestion, getQuestions} = require('./get');
const upvoteQuestion = require('./utils');

module.exports = {
    post: createQuestion,
    put: updateQuestion,
    delete: deleteQuestion,
    get: getQuestions,
    getOne: getQuestion,
    utils: {
        upvoteQuestion,
    }
}
