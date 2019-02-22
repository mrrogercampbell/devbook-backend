const express = require("express");
const router = express.Router();
const ProjectController = require("../Controllers/projectControllers");

router.get("/", ProjectController.index);

router.post("/", ProjectController.create);

router.delete("/:id", ProjectController.destroy);

// router.get("/:id/edit", ProjectController.editProfile);

// router.get("/new", ProjectController.new);

router.get("/:id", ProjectController.profile);

// router.get("/results", ProjectController.searchResults);

// router.get("/success", ProjectController.success);

router.put("/:id", ProjectController.update);

module.exports = router;
