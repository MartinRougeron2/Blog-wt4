const Question = require('../../../models/Question');

async function upvoteQuestion(req, res) {
    const { question_id } = req.params;
    const { user } = req;

    if (!user) {
        return res.status(401).end();
    }
    const question = await Question.findById(question_id);
    if (!question) {
        return res.status(404).end();
    }
    await Question.populate(question, { path: 'user' });
    console.log(question);
    if (question.upvotes.includes(user.id)) {
        question.upvotes = question.upvotes.filter((id) => {
            return id.toString() !== user.id.toString();
        });
    } else {
        question.upvotes.push(user.id);
    }
    await question.save();
    res.status(200).json(question);
}

module.exports = upvoteQuestion;
