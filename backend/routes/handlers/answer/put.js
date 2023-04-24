const Answer = require('../../../models/Answer');

async function handleUpdateAnswer(req, res, next) {
    const { answer_id } = req.params;
    const { answer } = req.body;
    const { user } = req;

    const get_answer = await Answer.findById(answer_id);

    if (!get_answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    if (get_answer.user.toString() !== user._id.toString() && user.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    get_answer.body = answer;
    await get_answer.save();
    res.status(200).json(get_answer);
}

module.exports = handleUpdateAnswer;
