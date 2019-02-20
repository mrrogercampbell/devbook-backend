const express = require("express");
const router = express.Router();

router.use("/user", require("./UserRoutes"));
// router.use('/job', require("./jobsRoutes"))
router.use('/projects', require("./ProjectRoutes"))
router.use('/posts', require("./PostRoutes"))
// router.use('/job', require("./commentsRoutes"))

module.exports = router;
