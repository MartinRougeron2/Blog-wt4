import Question from '../../../models/Question';

async function deleteQuestion(req, res) {
    const { id } = req.params;
    const { user } = req;

    if (!user) {
        return res.status(401).end();
    }
    const question = await Question.findById(id);
    if (user.role !== 'admin' && user.id !== question.user) {
        return res.status(403).end();
    }
    await Question.findByIdAndDelete(id);
    res.status(204).end();
}

export default deleteQuestion;
