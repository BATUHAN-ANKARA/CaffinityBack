const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const userValidator = require("../validations/index");

router.post("/signUp", controller.userController.signUp);
router.post("/signIn", controller.userController.signIn);
router.get("/getUser/:id", controller.userController.getUser);
router.get("/login", controller.userController.login);


module.exports = {
  user: router
};
