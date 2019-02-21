const Comment = require("../../Models/CommentsModel");
const seeds = require("./commentSeedData.json");

Comment.remove({}).then(_ => {
    console.log("Dropped the DB");
    Comment.collection
        .insert(seeds)
        .then(newComment => {
            console.log(seeds);
            process.exit()
        })
        .catch(err => {
            console.log(err);
        });
});
