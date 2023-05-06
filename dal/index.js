const userDal = require("./user.dal");
const tablesDal = require("./tables.dal");
const itemsDal = require("./items.dal");
const ordersDal = require("./orders.dal");

module.exports = {
  user: userDal,
  tables: tablesDal,
  orders: ordersDal,
  items: itemsDal,
};
