const express = require('express');
const app = express();
const dotenv = require('dotenv')
const port = process.env.PORT || 8000;

dotenv.config();

require('./database');
require('./routes').routes(app);
require('./middleware').middleware(app);
require('./doc').swagger(app);
require('./printRoutes').print(app);


app.listen(port, () => {
    console.log('App is listening on ' + port);
})

