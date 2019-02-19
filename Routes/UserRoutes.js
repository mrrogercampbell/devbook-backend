const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/", userController.index);

router.get("/new", userController.new);

router.post("/", userController.create);

router.get("/success", userController.success);

router.get("/:id", userController.showOne);

router.delete("/:id", userController.destroy);

router.get("/:id/edit", userController.edit);

router.put("/:id", userController.update);

module.exports = router;
