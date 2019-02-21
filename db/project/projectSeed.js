const Project = require("../../Models/ProjectModel");
const seeds = require("./projectSeedData.json");

Project.remove({}).then(_ => {
    console.log("Dropped the DB");
    Project.collection
        .insert(seeds)
        .then(newProject => {
            console.log(seeds);
            process.exit()
        })
        .catch(err => {
            console.log(err);
        });
});
