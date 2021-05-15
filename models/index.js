const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animal_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connection is OK');
});

module.exports.Animal = require('./animal.model');