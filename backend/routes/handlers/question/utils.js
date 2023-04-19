import Question from '../../../models/Question';

async function upvoteQuestion(req, res) {
    const { id } = req.params;
    const { user } = req;

    if (!user) {
        return res.status(401).end();
    }

    const question = await Question.findById(id);
    if (question.upvotes.includes(user.id)) {
        return res.status(400).end();
    }
    question.upvotes.push(user.id);
    await question.save();
    res.status(200).json(question);
}

export default upvoteQuestion;
