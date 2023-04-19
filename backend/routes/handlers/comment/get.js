const Comment = require('../../../models/Comment');
const Answer = require('../../../models/Answer');

async function getComments(req, res) {
    const { postId } = req.params;
    const comments = await Answer.findById(postId).populate('comments').exec();

    res.json(comments);
}

async function getComment(req, res) {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    res.json(comment);
}

module.exports = { getComments, getComment };
