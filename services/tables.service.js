const Tables = require("../models/tables.model");
const tablesDal = require("../dal/index");

exports.createTable = async (req) => {
  try {
    let { location, number, name } = req.body;
    const existingTable = await tablesDal.tables.findOne({
      name: name,
      location: location,
      number: number
    });
    if (existingTable && existingTable.location === location && existingTable.number === number) {
      return "Bu masa zaten var";
    }
    const table = new Tables({
      name,
      location,
      number,
    });
    const json = await tablesDal.tables.create(table);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getTable = async (req) => {
  try {
    const { tableName } = req.query;
    const table = await Tables.find({ name: tableName });
    if (!table) {
      throw new Error("Masa bulunamadı.");
    }
    return table;
  } catch (error) {
    throw new Error(error);
  }
};

exports.gotPayment = async (req) => {
  try {
    let { tableName } = req.query;
    const table = await Tables.findOneAndUpdate(
      { name: tableName },
      { totalPrice: 0, orders: [] },
      { new: true }
    );
    if (!table) {
      throw new Error("Masa bulunamadı.");
    }
    return table;
  } catch (error) {
    throw new Error(error);
  }
};
