const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/results", userController.searchResults);

router.get("/new", userController.new);

router.post("/", userController.create);

router.get("/success", userController.success);

router.get("/:id", userController.profile);

router.delete("/:id", userController.destroyProfile);

router.get("/:id/edit", userController.editProfile);

router.put("/:id", userController.updateProfile);

module.exports = router;
