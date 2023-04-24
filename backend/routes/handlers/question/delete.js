const Question = require('../../../models/Question');

async function deleteQuestion(req, res) {
    const { question_id } = req.params;
    const { user } = req;

    if (!user) {
        return res.status(401).end();
    }
    const question = await Question.findById(question_id);
    if (user.role !== 'admin' && user.id !== question.user) {
        return res.status(403).end();
    }
    await Question.findByIdAndDelete(question_id);
    res.status(204).end();
}

module.exports = deleteQuestion;
