const Question = require('../../../models/Question');

async function createQuestion(req, res) {
    const { title, description } = req.body;

    const question = new Question({
        title,
        body: description,
        user: req?.user?._id
    });
    await question.save();
    res.status(201).json(question);
}

module.exports = createQuestion;
