const Comment = require('../../../models/Comment');
const Answer = require('../../../models/Answer');

async function getComments(req, res) {
    const { answer_id } = req.params;
    const answer = await Answer.findById(answer_id);

    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    await Answer.populate(answer, { path: 'comments' });
    const comments = answer.comments;

    res.json(comments);
}

async function getComment(req, res) {
    const { comment_id } = req.params;
    console.log(comment_id)
    const comment = await Comment.findById(comment_id);
    res.json(comment);
}

module.exports = { getComments, getComment };
