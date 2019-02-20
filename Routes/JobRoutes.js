const express = require("express");
const router = express.Router();
const JobController = require("../Controllers/jobController");

router.get("/", JobController.index);

router.post("/", JobController.create);

// router.delete("/:id", JobController.destroyProfile);

// router.get("/:id/edit", JobController.editProfile);

// router.get("/new", JobController.new);

router.get("/:id", JobController.profile);

// router.get("/results", JobController.searchResults);

// router.get("/success", JobController.success);

// router.put("/:id", JobController.updateProfile);

module.exports = router;
