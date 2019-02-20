const mongoose = require("../../Models/JobModel");
const seeds = require("./jobSeedData.json");
const Job = mongoose.model("JobModel");

mongoose.Promise = Promise;

Job.remove({}).then(_ => {
    console.log("Dropped the DB");
    Job.collection
        .insert(seeds)
        .then(newJob => {
            console.log(seeds);
            mongoose.connection.close();
        })
        .catch(err => {
            console.log(err);
        });
});
