const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL, { useNewUrlParser: true });
} else {
  mongoose.connect("mongodb://localhost/devbook-backend", {
  });
}

mongoose.Promise = Promise;

module.exports = mongoose;
