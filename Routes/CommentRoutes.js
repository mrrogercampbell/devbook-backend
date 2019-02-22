const express = require("express");
const router = express.Router();
const CommentController = require("../Controllers/commentsController");

router.get("/", CommentController.index);

router.post("/", CommentController.create);

router.delete("/:id", CommentController.destroy);

// router.get("/edit/:id", CommentController.editComment);

// router.get("/new", CommentController.new);

router.get("/:devPostId", CommentController.comment);

// router.get("/results", CommentController.searchResults);

// router.get("/success", CommentController.success);

router.put("/:id", CommentController.update);

module.exports = router;
