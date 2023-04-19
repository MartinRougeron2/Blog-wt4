const User = require('../../../models/User');

async function getUser(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).end();
    }
    res.status(200).json(user);
}

async function getUsers(req, res) {
    const users = await User.find();
    res.status(200).json(users);
}

module.exports = { getUser, getUsers };
