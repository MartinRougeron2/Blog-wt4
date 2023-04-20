const Question = require('../../../models/Question');

async function getQuestion(req, res) {
    const { id } = req.params;

    const question = Question.findById(id);

    if (!question) {
        return res.status(404).end();
    }
    res.status(200).json(question);
}

async function getQuestions(req, res) {
    const questions = await Question.find();
    await Question.populate(questions, { path: 'user' });
    res.status(200).json(questions);
}

module.exports = { getQuestion, getQuestions };
