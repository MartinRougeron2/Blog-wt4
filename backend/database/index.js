const mongoose = require('mongoose');

function connectionDatabase(uri) {
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('connected', () => {
            console.log('Connected to mongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.log('Error connecting to mongoDB', err);
        });
    } catch (e) {
        console.error('Connection to MongoDB Failed:');
        console.error(e);

    }
}

const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;

const MONGO_URI = `mongodb+srv://${username}:${password}@clusterexpress.gl8uvk3.mongodb.net/?retryWrites=true&w=majority`;

connectionDatabase(MONGO_URI);

