const Answer = require('../../../models/Answer');
const Question = require('../../../models/Question');

async function handleGetAnswer(req, res, next) {
    const { answer_id } = req.params;

    const answer = await Answer.findById(answer_id);

    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    res.status(200).json(answer);
}

async function handleGetAnswers(req, res, next) {
    const { question_id } = req.params;

    const question = await Question.findById(question_id);

    if (!question) {
        return res.status(404).json({ error: 'Question not found' });
    }
    // populate answers
    await Question.populate(question, { path: 'answers' });
    await Answer.populate(question.answers, { path: 'user' });
    res.status(200).json(question.answers);
}

module.exports = { handleGetAnswer, handleGetAnswers }
