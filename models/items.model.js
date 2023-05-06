const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    product: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Item = mongoose.model("Item", itemSchema, "items");

module.exports = Item;
