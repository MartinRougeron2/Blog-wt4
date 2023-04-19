const createComment = require('./create');
const {getComment, getComments} = require('./get');
const updateComment = require('./put');
const deleteComment = require('./delete');

module.exports = {
    post: createComment,
    get: getComments,
    getOne: getComment,
    put: updateComment,
    delete: deleteComment,
    utils: {
    }
}
