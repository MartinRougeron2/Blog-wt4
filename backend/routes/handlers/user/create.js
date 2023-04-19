import User from '../../../models/User';

const bcrypt = require("bcrypt")

async function createUser(req, res) {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);


    const user = new User({
        username,
        password: hash,
    });
    await user.save();
    res.status(201).json(user);
}

export default createUser;
