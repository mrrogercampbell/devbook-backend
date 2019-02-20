const mongoose = require("../Models/UserModel");
const seeds = require("./userSeedData.json");
const User = mongoose.model("userModel");

mongoose.Promise = Promise;

User.remove({}).then(_ => {
  console.log("Dropped the DB");
  User.collection
    .insertMany(seeds)
    .then(newUser => {
      console.log(seeds);
      mongoose.connection.close();
    })
    .catch(err => {
      console.log(err);
    });
});
