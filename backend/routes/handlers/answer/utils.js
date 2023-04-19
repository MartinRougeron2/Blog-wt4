import Answer from '../../../models/Answer';

async function handleApproveAnswer(req, res, next){
    const { answerId } = req.params;
    const { user } = req;

    const answer = await Answer.findById(answerId);
    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    if (answer.user.toString() !== user._id.toString() && user.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    answer.approved = true;
    await answer.save();
    res.status(200).json(answer);
}

export default handleApproveAnswer;
