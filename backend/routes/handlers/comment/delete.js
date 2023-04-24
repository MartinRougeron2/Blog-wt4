const Comment = require('../../../models/Comment');

async function deleteComment(req, res) {
  const { comment_id } = req.params;
  const { user } = req;

  const comment = await Comment.findById(comment_id);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    if (comment.user.toString() !== user._id.toString() && user.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    await Comment.findByIdAndDelete(comment_id);
    res.status(200).json({ message: 'Comment deleted' });
}

module.exports = deleteComment;
