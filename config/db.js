const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/CovidStores', {useUnifiedTopology: true, useNewUrlParser: true});

module.exports = db;