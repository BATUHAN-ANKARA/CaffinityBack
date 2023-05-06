const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    table: {
      type: Schema.Types.ObjectId,
      ref: "Tables",
      required: true
    },
    items: [
      {
        product: {
          type: String,
          required: true
        },
        quantity: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
        },
        _id: false // _id alanının oluşmasını engeller
      }
    ],
    price: {
      type: Schema.Types.Number
    },
    status: {
      type: String,
      enum: ["pending", "preparing", "served", "paid"],
      default: "pending"
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Orders = mongoose.model("Orders", ordersSchema, "orders");

module.exports = Orders;
