const express = require("express");
const router = express.Router();

router.use("/user", require("./UserRoutes"));
router.use('/jobs', require("./JobRoutes"))
router.use('/projects', require("./ProjectRoutes"))
router.use('/posts', require("./PostRoutes"))
// router.use('/comments', require("./commentsRoutes"))

module.exports = router;
