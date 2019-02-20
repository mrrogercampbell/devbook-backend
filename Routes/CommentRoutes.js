const express = require("express");
const router = express.Router();
const CommentController = require("../Controllers/commentController");

router.get("/", CommentController.index);

router.post("/", CommentController.create);

// router.delete("/:id", CommentController.destroyProfile);

// router.get("/:id/edit", CommentController.editProfile);

// router.get("/new", CommentController.new);

router.get("/:id", CommentController.profile);

// router.get("/results", CommentController.searchResults);

// router.get("/success", CommentController.success);

// router.put("/:id", CommentController.updateProfile);

module.exports = router;
