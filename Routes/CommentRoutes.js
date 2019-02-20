const express = require("express");
const router = express.Router();
const CommentController = require("../Controllers/commentsController");

router.get("/", CommentController.index);

router.post("/", CommentController.create);

// router.delete("/:id", CommentController.destroyComment);

router.get("/edit/:id", CommentController.editComment);

// router.get("/new", CommentController.new);

router.get("/:id", CommentController.comment);

// router.get("/results", CommentController.searchResults);

// router.get("/success", CommentController.success);

// router.put("/:id", CommentController.updateComment);

module.exports = router;
