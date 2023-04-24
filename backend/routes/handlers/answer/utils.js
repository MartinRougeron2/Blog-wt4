const Answer = require('../../../models/Answer');
const Question = require('../../../models/Question');

async function handleApproveAnswer(req, res, next){
    const { answer_id, question_id } = req.params;
    const { user } = req;


    const answer = await Answer.findById(answer_id);
    const question = await Question.findById(question_id);

    if (!question) {
        return res.status(404).json({ error: 'Question not found' });
    }
    if (!answer) {
        return res.status(404).json({ error: 'Answer not found' });
    }
    console.log(question.user, user._id, user.role);
    if (question?.user?.toString() !== user._id.toString() && user.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    answer.approved = !answer.approved;
    await answer.save();
    res.status(200).json(answer);
}

module.exports = handleApproveAnswer;
