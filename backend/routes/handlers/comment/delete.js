import Comment from '../../../models/Comment';

async function deleteComment(req, res) {
  const { commentId } = req.params;
  const { user } = req;
  const { id: userId } = user;

  const comment = await Comment.findById(commentId);

  if (comment.user.id === userId || req.user.role === 'admin') {
    await comment.destroy();
    res.json(comment);
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

export default deleteComment;
