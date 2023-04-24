const Answer = require('../../../models/Answer');
const Question = require('../../../models/Question');
async function handleCreateAnswer (req, res, next) {
    const {question_id} = req.params
    const {answer} = req.body
    const {user} = req;

    if (!answer) {
        return res.status(400).json({error: 'Answer body is required'});
    }
    if (answer.length < 10) {
        return res.status(400).json({error: 'Answer body must be at least 10 characters long'});
    }
    if (!user) {
        return res.status(401).json({error: 'Must be logged in to answer a question'});
    }

    const question = await Question.findById(question_id);
    if (!question) {
        return res.status(404).json({error: 'Question not found'});
    }

    const newAnswer = await new Answer({
        user: user._id,
        body: answer,
    });

    await newAnswer.save();
    question.answers.push(newAnswer._id);
    await question.save();
    await Question.populate(question, {path: 'answers'});
    res.status(201).json(question);
}

module.exports = handleCreateAnswer;
