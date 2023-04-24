const Comment = require('../../../models/Comment');
const Answer = require('../../../models/Answer');

async function createComment(req, res) {
  const { comment } = req.body;
  const { user } = req;
    const { answer_id } = req.params;

  const answer = await Answer.findById(answer_id);

    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }

    const new_comment = new Comment({
        body: comment,
        user: user.id,

    });

    answer.comments.push(new_comment);
    await answer.save();
    await new_comment.save();
    await Comment.populate(new_comment, { path: 'user' });

  res.json(new_comment);
}

module.exports = createComment;
