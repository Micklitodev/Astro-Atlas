const mongoose = require("mongoose");

const dotenv = require('dotenv')
dotenv.config() 

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/astroatlas", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
