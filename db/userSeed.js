const User = require("../Models/UserModel");
const seeds = require("./userSeedData.json");

User.remove({}).then(_ => {
  console.log("Dropped the DB");
  User.collection
    .insert(seeds)
    .then(newUser => {
      console.log(seeds);
      process.exit()
    })
    .catch(err => {
      console.log(err);
    });
});
