const mongoose = require("../../Models/ProjectModel");
const seeds = require("./projectSeedData.json");
const Project = mongoose.model("ProjectModel");

mongoose.Promise = Promise;

Project.remove({}).then(_ => {
    console.log("Dropped the DB");
    Project.collection
        .insert(seeds)
        .then(newProject => {
            console.log(seeds);
            mongoose.connection.close();
        })
        .catch(err => {
            console.log(err);
        });
});
