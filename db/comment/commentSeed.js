const mongoose = require("../Models/CommentModel");
const seeds = require("./commentSeedData.json");
const Comment = mongoose.model("commentModel");

mongoose.Promise = Promise;

Comment.remove({}).then(_ => {
    console.log("Dropped the DB");
    Comment.collection
        .insert(seeds)
        .then(newComment => {
            console.log(seeds);
            mongoose.connection.close();
        })
        .catch(err => {
            console.log(err);
        });
});
