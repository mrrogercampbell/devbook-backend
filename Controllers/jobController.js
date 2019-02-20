const mongoose = require("../Models/JobModel");
const Job = mongoose.model("JobModel");

mongoose.connect("mongodb://localhost/devbook-backend");

mongoose.Promise = Promise;

module.exports = {
    index: (req, res) => {
        Job.find({})
            .then(allJobs => {
                res.json(allJobs);
            });
    },

    //(POST Request) Create new Job in the database
    create: (req, res) => {
        Job.create({
            content: req.body.content,
            position: req.body.position,
            company: req.body.company,
            location: req.body.location,
            logoURL: req.body.logoURL,
        }).then(newJob => {
            console.log(`Hey Check Out the New Job ${newJob}`);
            // res.redirect('/success')
            // res.redirect(`/Jobs/${newJob.id}`);
        });
    },

    //(DELETE Request) Delete a Job Profile
    destroyProfile: (req, res) => {
        Job.findOneAndRemove({ _id: req.params.id }).then(Job => {
            res.redirect(`/Job`);
        });
    },

    // (GET Request) Render form to update a single Job
    editProfile: (req, res) => {
        Job.findOne({ _id: req.params.id }).then(Job => {
            res.render("JobViews/updateJobForm.hbs", { Job });
        });
    },

    //(GET Request) Render new Job form
    new: (req, res) => {
        res.render("");
    },

    // (GET Request) Render a View to Show one Job Profile
    profile: (req, res) => {
        Job.findOne({ _id: req.params.id }).then(singleJob => {
            res.json(singleJob);
        });
    },

    //  (GE T Request) List query results
    //   searchResults: (req, res) => {
    //     Job.find({}).then(Jobs => {
    //       res.render("JobViews/JobsIndex", { Jobs });
    //     });
    //   },

    //(GET Request) Render a view tells Jobs their profile has been created
    success: (req, res) => {
        // res.send(<h1>Yup You did it!</h1>);
        res.send("Yup You did it!");
    },

    // (PUT Request) Updates Job profile in the database
    updateProfile: (req, res) => {
        Job.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    content: req.body.content,
                    position: req.body.position,
                    company: req.body.company,
                    location: req.body.location,
                    companyLogo: req.body.companyLogo
                }
            }
        ).then(Job => {
            res.redirect(`/Job/${Job.id}`);
        });
    }
};
