const express = require('express');
const
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();
require('./database');

const routerAnswer = require('./routes/Answer');
const routerComment = require('./routes/Comment');
const routerQuestion = require('./routes/Question');
const routerUser = require('./routes/User');
const routerUtils = require('./routes/utils');

const app = express();

app.use('/api', routerAnswer);
app.use('/api', routerComment);
app.use('/api', routerQuestion);
app.use('/api', routerUser);
app.use('/api', routerUtils);

// middleware
app.use(express.json());
// cors
const cors = require('cors');
app.use(cors());

// middleware authentication jwt
const requireLogin = require('./middleware/auth');
app.use(requireLogin);

const port = process.env.PORT || 8000;

// swagger
const options = {
    swaggerDefinition: {
        info: {
            title: "Stackoverflow Clone API",
            version: "1.0.0",
            description: "Stackoverflow Clone API Information",
        },
        servers: ["http://localhost:8000"],
    },
    apis: ["./routes/*.js"],
};


const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);
app.listen(port, () => {
    console.log('App is listening on ' + port);
})

