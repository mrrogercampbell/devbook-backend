const mongoose = require("mongoose");

mongoose.Promise = Promise;

const mongoUri = "mongodb://localhost/devbook";

mongoose
  .connect(mongoUri, { useNewUrlParser: true })
  .then(connection => console.log("Connection established to db"))
  .catch(connectionError => console.log("Connection failed", connectionError));

module.exports = mongoose;
