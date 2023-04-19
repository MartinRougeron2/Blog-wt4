const Comment = require('../../../models/Comment');

async function createComment(req, res) {
  const { text, postId } = req.body;
  const { user } = req;


  const comment = await Comment.create({
    text,
    postId,
    userId: user.id,
  });

  res.json(comment);
}

module.exports = createComment;
