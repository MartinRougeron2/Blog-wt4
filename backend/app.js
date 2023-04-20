const express = require('express');
// database connection

const app = express();

// database connection
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;

const MONGO_URI = `mongodb+srv://${username}:${password}@clusterexpress.gl8uvk3.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongoDB', err);
});

// middleware
app.use(express.json());
// cors
const cors = require('cors');
app.use(cors());

// middleware authentication jwt
const requireLogin = require('./middleware/requireLogin');
app.use(requireLogin);

// routes middleware
const routes = require('./routes');
app.use('/api', routes.routerQuestion);
app.use('/api', routes.routerAnswer);
app.use('/api', routes.routerComment);
app.use('/api', routes.routerUser);
app.use('/api', routes.routerUtils);

const port = process.env.PORT || 8000;

require('./doc').swagger(app);
require('./printRoutes').print(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


