const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userControllers");

router.get("/", userController.index);

router.post("/", userController.create);

// router.delete("/:id", userController.destroyProfile);

// router.get("/:id/edit", userController.editProfile);

// router.get("/new", userController.new);

router.get("/:id", userController.profile);

// router.get("/results", userController.searchResults);

// router.get("/success", userController.success);

// router.put("/:id", userController.updateProfile);

module.exports = router;
