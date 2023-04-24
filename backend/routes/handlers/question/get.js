const Question = require('../../../models/Question');

async function getQuestion(req, res) {
    const { question_id } = req.params;

    const question = await Question.findById(question_id);

    await Question.populate(question, { path: 'user' });
    await Question.populate(question, { path: 'answers' });

    if (!question) {
        return res.status(404).end();
    }
    res.status(200).json(question);
}

async function getQuestions(req, res) {
    const questions = await Question.find();
    await Question.populate(questions, { path: 'user' });
    await Question.populate(questions, { path: 'answers' });

    res.status(200).json(questions);
}

module.exports = { getQuestion, getQuestions };
