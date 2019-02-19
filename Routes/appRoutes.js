const express = require("express");
const router = express.Router();

// router.get('/', (req, res) => { res.render("homepage.hbs") })
router.use("/user", require("./UserRoutes"));
// router.use('/job', require("./starshipRoutes"))
// router.use('/project', require("./missionRoutes"))

module.exports = router;
