const userRouter = require("./user.router").user;
const tablesRouter = require("./tables.router").tables;
const ordersRouter = require("./orders.router").orders;
const itemsRouter = require("./items.router").items;

module.exports = {
  userRouter,
  tablesRouter,
  ordersRouter,
  itemsRouter
};
