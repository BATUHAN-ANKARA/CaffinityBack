const Tables = require("../models/tables.model");

const TablesDataAccess = {
  async create(tablesModel) {
    return await tablesModel.save();
  },
  async updateById(id, body) {
    return await Tables.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Tables.findOne(where);
  },
  async findById(id) {
    return await Tables.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Tables.findOne(where).populate(populate);
  }
};

module.exports = TablesDataAccess;
