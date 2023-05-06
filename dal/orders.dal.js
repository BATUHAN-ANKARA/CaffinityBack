const Orders = require("../models/orders.model");

const OrdersDataAccess = {
  async create(ordersModel) {
    return await ordersModel.save();
  },
  async updateById(id, body) {
    return await Orders.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Orders.findOne(where);
  },
  async findById(id) {
    return await Orders.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Orders.findOne(where).populate(populate);
  }
};

module.exports = OrdersDataAccess;
