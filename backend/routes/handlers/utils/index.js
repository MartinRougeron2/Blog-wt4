const login = require('./login');
const register = require('./register');
const {refreshToken, verifyToken, getUserFromToken} = require('./token');

module.exports = {
    login,
    register,
    refreshToken,
    verifyToken,
    me: getUserFromToken
}
