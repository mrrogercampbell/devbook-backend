const mongoose = require("../Models/ProjectModel");
const Project = mongoose.model("ProjectModel");

mongoose.connect("mongodb://localhost/devbook");

mongoose.Promise = Promise;

module.exports = {
  index: (req, res) => {
    Project.find({}).then(allProjects => {
      res.json(allProjects);
    });
  },

  //(POST Request) Create new Project in the database
  create: (req, res) => {
    Project.create({
      content: req.body.content,
      position: req.body.position,
      company: req.body.company,
      location: req.body.location,
      companyLogo: req.body.companyLogo,
      createdAt: {
        Type: Date,
        Default: Date.now()
      }
    }).then(newProject => {
      console.log(`Hey Check Out the New Project ${newProject}`);
      // res.redirect('/success')
      res.redirect(`/Project/${newProject.id}`);
    });
  },

  //(DELETE Request) Delete a Project Profile
  destroyProfile: (req, res) => {
    Project.findOneAndRemove({ _id: req.params.id }).then(Project => {
      res.redirect(`/Project`);
    });
  },

  // (GET Request) Render form to update a single Project
  editProfile: (req, res) => {
    Project.findOne({ _id: req.params.id }).then(Project => {
      res.render("ProjectViews/updateProjectForm.hbs", { Project });
    });
  },

  //(GET Request) Render new Project form
  new: (req, res) => {
    res.render("");
  },

  // (GET Request) Render a View to Show one Project Profile
  profile: (req, res) => {
    Project.findOne({ _id: req.params.id }).then(singleProject => {
      res.json(singleProject);
    });
  },

  //  (GE T Request) List query results
  //   searchResults: (req, res) => {
  //     Project.find({}).then(Projects => {
  //       res.render("ProjectViews/ProjectsIndex", { Projects });
  //     });
  //   },

  //(GET Request) Render a view tells Projects their profile has been created
  success: (req, res) => {
    // res.send(<h1>Yup You did it!</h1>);
    res.send("Yup You did it!");
  },

  // (PUT Request) Updates Project profile in the database
  updateProfile: (req, res) => {
    Project.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          content: req.body.content,
          position: req.body.position,
          company: req.body.company,
          location: req.body.location,
          companyLogo: req.body.companyLogo,
          createdAt: {
            Type: Date,
            Default: Date.now()
          }
        }
      }
    ).then(Project => {
      res.redirect(`/Project/${Project.id}`);
    });
  }
};
