const userService = require("./user.service");
const tablesService = require("./tables.service");
const itemsService = require("./items.service");
const ordersService = require("./orders.service");

module.exports = {
  user: userService,
  tables: tablesService,
  items: itemsService,
  orders: ordersService,
};
