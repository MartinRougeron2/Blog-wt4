// middleware
const bodyParser = require("body-parser");
const express = require('express');
const requireLogin = require('./auth');
const cors = require('cors');

exports.middleware = (app) => {

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.json());
// cors
    app.use(cors());

// middleware authentication jwt
    app.use(requireLogin);
}
