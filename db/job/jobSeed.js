const Job = require("../../Models/JobModel");
const seeds = require("./jobSeedData.json");
// const Job = mongoose.model("JobModel");

// mongoose.Promise = Promise;

Job.remove({}).then(_ => {
    console.log("Dropped the DB");
    Job.collection
        .insert(seeds)
        .then(newJob => {
            console.log(seeds);
            // mongoose.connection.close();
            process.exit()
        })
        .catch(err => {
            console.log(err);
        });
});
