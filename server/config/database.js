const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/test', {useMongoClient: true});

mongoose.connection.on('connected', () => console.log('connected!'));
mongoose.connection.on('error', (err) => console.log(`error: ${err}`));
mongoose.connection.on('disconnect', () => console.log('disconnected'));