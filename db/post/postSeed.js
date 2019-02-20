const mongoose = require("../../Models/PostModel");
const seeds = require("./postSeedData.json");
const Post = mongoose.model("PostModel");

mongoose.Promise = Promise;

Post.remove({}).then(_ => {
    console.log("Dropped the DB");
    Post.collection
        .insert(seeds)
        .then(newPost => {
            console.log(seeds);
            mongoose.connection.close();
        })
        .catch(err => {
            console.log(err);
        });
});
