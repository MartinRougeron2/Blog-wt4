const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
 user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  answer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  },
    body: {
     type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment
