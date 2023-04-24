const mongoose = require('mongoose');


const answerSchema = new mongoose.Schema({
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
  approved: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  },
  upvotes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer
