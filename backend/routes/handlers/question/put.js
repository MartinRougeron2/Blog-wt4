const Question = require('../../../models/Question');

async function updateQuestion(req, res) {
    const { question_id } = req.params;
    const { user } = req;
    const { title, description } = req.body;

    if (!user) {
        return res.status(401).end();
    }

    const question = await Question.findById(question_id);
    await Question.populate(question, { path: 'user' });

    if (user.role !== 'admin') {
        if (user._id.toString() !== question?.user?._id.toString()) {
            return res.status(403).end();
        }
    }
    question.title = title;
    question.body = description;
     await question.save();
    res.status(200).json(question);
}

module.exports = updateQuestion;
