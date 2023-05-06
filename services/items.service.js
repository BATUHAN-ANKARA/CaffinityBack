const Items = require("../models/items.model");
const itemsDal = require("../dal/index");

exports.createItem = async (req) => {
  try {
    let { product, price, category } = req.body;
    const existingItem = await itemsDal.items.findOne({
      product: product
    });
    if (
      existingItem &&
      existingItem.product === product &&
      existingItem.price === price
    ) {
      return "Bu ürün zaten var";
    }
    const item = new Items({
      product,
      category,
      price
    });
    const json = await itemsDal.items.create(item);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getItems = async (req) => {
  try {
    const json = await Items.find();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
