const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/createItem", controller.itemsController.createItem);
router.get("/getItems", controller.itemsController.getItems);

module.exports = {
  items: router
};
