import Comment from '../../../models/Comment';

async function updateComment(req, res) {
    const { commentId } = req.params;
    const { user } = req;
    const { id: userId } = user;
    const { body } = req.body;

    const comment = await Comment.findById(commentId);
    comment.body = body;
    await comment.save();
    res.json(comment);
}

export default updateComment;
