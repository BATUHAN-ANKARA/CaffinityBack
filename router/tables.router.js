const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/createTable", controller.tablesController.createTable);
router.get("/getTable", controller.tablesController.getTable);
router.put("/gotPayment", controller.tablesController.gotPayment);

module.exports = {
  tables: router
};
