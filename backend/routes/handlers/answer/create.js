import Answer from "../../../models/Answer";

async function handleCreateAnswer (req, res, next) {
    const {questionId} = req.params
    const {answer} = req.body
    const {user} = req;

    if (!answer) {
        return res.status(400).json({error: 'Answer body is required'});
    }
    if (answer.length < 10) {
        return res.status(400).json({error: 'Answer body must be at least 10 characters long'});
    }
    if (!user) {
        return res.status(401).json({error: 'Must be logged in to answer a question'});
    }

    const newAnswer = await new Answer({
        user: user._id,
        body: answer,
        question: questionId
    });

    newAnswer.save((err, answer) => {
        if (err) {
            return next(err);
        }
        res.status(200).json(answer);
    });
}

export default handleCreateAnswer;
