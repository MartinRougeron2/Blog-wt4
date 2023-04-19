const login = require('./login');
const register = require('./register');
const {refreshToken, verifyToken} = require('./token');

module.exports = {
    login,
    register,
    refreshToken,
    verifyToken,
}
