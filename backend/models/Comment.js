const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
     type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    upvotes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment
