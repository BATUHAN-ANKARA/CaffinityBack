const Items = require("../models/items.model");

const ItemsDataAccess = {
  async create(itemsModel) {
    return await itemsModel.save();
  },
  async updateById(id, body) {
    return await Items.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Items.findOne(where);
  },
  async findById(id) {
    return await Items.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Items.findOne(where).populate(populate);
  }
};

module.exports = ItemsDataAccess;
