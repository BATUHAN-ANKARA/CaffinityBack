const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/createOrder", controller.ordersController.createOrder);
router.get("/endDay", controller.ordersController.endDay);
router.get("/getOrder", controller.ordersController.getOrder);

module.exports = {
  orders: router
};
