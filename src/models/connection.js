const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster'; // for github evaluator
// const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster'; // for local evaluator
const DB_NAME = 'Cookmaster';

const connection = () =>
  MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.log(err);
      process.exit();
    });

module.exports = connection;