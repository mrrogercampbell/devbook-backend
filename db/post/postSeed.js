const Post = require("../../Models/PostModel");
const seeds = require("./postSeedData.json");

Post.remove({}).then(_ => {
    console.log("Dropped the DB");
    Post.collection
        .insert(seeds)
        .then(newPost => {
            process.exit()
        })
        .catch(err => {
            console.log(err);
        });
});
