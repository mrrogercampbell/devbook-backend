const mongoose = require("../Models/userModel");
const User = mongoose.model("userModel");

mongoose.connect("mongodb://localhost/devbook");

mongoose.Promise = Promise;

module.exports = {
  // (GET Request) List all Users
  index: (req, res) => {
    User.find({}).then(users => {
      res.render("userViews/usersIndex", { users });
    });
  },
  //(GET Request) Render newUserform.hbs
  new: (req, res) => {
    res.render("userViews/newUserForm");
  },
  //(POST Request) Create new user in the database
  create: (req, res) => {
    User.create({
      firstName: req.body.firstName,
      middleName: req.body.middleName
    }).then(newUser => {
      console.log(`Hey Check Out the New User ${newUser}`);
      // res.redirect('/success')
      res.redirect(`/user/${newUser.id}`);
    });
  },
  //(GET Request) Render newUserSuccessPage.hbs
  success: (req, res) => {
    res.render("userViews/newUserSuccessPage");
  },
  // (GET Request) Render a View to Show one User Profile
  showOne: (req, res) => {
    User.findOne({ _id: req.params.id }).then(user => {
      res.render("userViews/singleUserView", { user });
    });
  },
  //(DELETE Request) Delete a User Profile
  delete: (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }).then(user => {
      res.redirect(`/user`);
    });
  },

  // (GET Request) Render form to update a single user
  edit: (req, res) => {
    User.findOne({ _id: req.params.id }).then(user => {
      res.render("userViews/updateUserForm.hbs", { user });
    });
  },
  // (PUT Request) Update resource in the database
  update: (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
            // serialNumber: req.body.serialNumber,
          },
          rank: req.body.rank,
          placeOfBirth: req.body.placeOfBirth,
          yearOfBirth: req.body.yearOfBirth,
          monthOfBirth: req.body.monthOfBirth,
          dayOfBirth: req.body.dayOfBirth,
          gender: req.body.gender,
          maritalStatus: req.body.maritalStatus
        }
      }
    ).then(user => {
      res.redirect(`/user/${user.id}`);
    });
  }
};
