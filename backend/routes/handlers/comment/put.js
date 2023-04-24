const Comment = require('../../../models/Comment');

async function updateComment(req, res) {
    const { comment_id } = req.params;
    const { user } = req;
    const { comment } = req.body;

    const get_comment = await Comment.findById(comment_id);
    if (!get_comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    if (get_comment.user.toString() !== user._id.toString() && user.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    get_comment.body = comment;
    await get_comment.save();
    res.json(get_comment);
}

module.exports = updateComment;
