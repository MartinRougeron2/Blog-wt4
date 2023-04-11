// swagger
const
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const m2s = require('mongoose-to-swagger');
const Question = require('./models/Question');
const User = require('./models/User');
const Answer = require('./models/Answer');
const Comment = require('./models/Comment');
const swaggerSchemaQuestion = m2s(Question);
const swaggerSchemaUser = m2s(User);
const swaggerSchemaAnswer = m2s(Answer);
const swaggerSchemaComment = m2s(Comment);


const options = {
    swaggerDefinition: {
        info: {
            title: "Stackoverflow Clone API",
            version: "1.0.0",
            description: "Stackoverflow Clone API Information",
        },
        servers: ["http://localhost:8000"],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        definitions: {
            Comment: swaggerSchemaComment,
            User: swaggerSchemaUser,
            Answer: swaggerSchemaAnswer,
            Question: swaggerSchemaQuestion,
        },

    },
    apis: ["./routes/*.js"],

};

const specs = swaggerJsdoc(options);

exports.swagger = (app) =>
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);
