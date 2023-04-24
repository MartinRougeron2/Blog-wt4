const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer'
    }
  ],
  upvotes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question
