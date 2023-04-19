const Question = require('../../../models/Question');

async function updateQuestion(req, res) {
    const { id } = req.params;
    const { user } = req;
    const { title, description, tags } = req.body;

    if (!user) {
        return res.status(401).end();
    }

    const question = await Question.findById(id);
    if (user.role !== 'admin' && user.id !== question.user) {
        return res.status(403).end();
    }
    question.title = title;
    question.description = description;
    question.tags = tags;
    await question.save();
    res.status(200).json(question);
}

module.exports = updateQuestion;
