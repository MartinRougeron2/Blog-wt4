const Answer = require('../../../models/Answer');
const Question = require('../../../models/Question');

async function handleGetAnswer(req, res, next) {
    const { answerId } = req.params;

    const answer = await Answer.findById(answerId);

    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    res.status(200).json(answer);
}

async function handleGetAnswers(req, res, next) {
    const { questionId } = req.params;

    const question = await Question.findById(questionId);

    if (!question) {
        return res.status(404).json({ error: 'Question not found' });
    }
    // populate answers
    question.populate('answers', (err, question) => {
        if (err) {
            return next(err);
        }
        res.status(200).json(question.answers);
    });
}

module.exports = { handleGetAnswer, handleGetAnswers }
