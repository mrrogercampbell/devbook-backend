const express = require("express");
const router = express.Router();
const PostController = require("../Controllers/postController");

router.get("/", PostController.index);

router.post("/", PostController.create);

// router.delete("/:id", PostController.destroyProfile);

// router.get("/:id/edit", PostController.editProfile);

// router.get("/new", PostController.new);

router.get("/:id", PostController.profile);

// router.get("/results", PostController.searchResults);

// router.get("/success", PostController.success);

// router.put("/:id", PostController.updateProfile);

module.exports = router;
