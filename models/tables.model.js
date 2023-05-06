const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tablesSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    totalPrice: {
      type: Number,
      required: false,
      default: 0
    },
    isOccupied: {
      type: Boolean,
      required: true,
      default: false
    },
    orders: [
      {
        type: Schema.Types.String,
        ref: "Order"
      }
    ]
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Tables = mongoose.model("Tables", tablesSchema, "tables");

module.exports = Tables;
