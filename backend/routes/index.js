
const routerAnswer = require('./Answer');
const routerComment = require('./Comment');
const routerQuestion = require('./Question');
const routerUser = require('./User');
const routerUtils = require('./utils');

exports.routes = (app) => {
    app.use('/api', routerAnswer);
    app.use('/api', routerComment);
    app.use('/api', routerQuestion);
    app.use('/api', routerUser);
    app.use('/api', routerUtils);
}
