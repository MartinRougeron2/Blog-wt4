const Answer = require('../../../models/Answer');

async function handleDeleteAnswer(req, res, next) {
    const { question_id, answer_id } = req.params;
    const { user } = req;

    const answer = await Answer.findById(answer_id);
    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    if (answer.user.toString() !== user._id.toString() && user.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    await Answer.findByIdAndDelete(answer_id);
    res.status(200).json({ message: 'Answer deleted' });
}

module.exports = handleDeleteAnswer;
