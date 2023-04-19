import Answer from '../../../models/Answer';

async function handleDeleteAnswer(req, res, next) {
    const { questionId, answerId } = req.params;
    const { user } = req;

    const answer = await Answer.findById(answerId);
    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    if (answer.user.toString() !== user._id.toString() && user.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    await answer.remove();
    res.status(200).json({ message: 'Answer deleted' });
}

export default handleDeleteAnswer;
