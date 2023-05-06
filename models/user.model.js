const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    surname: {
      type: Schema.Types.String,
      required: true
    },
    email: {
      type: Schema.Types.String,
      required: false
    },
    password: {
      type: Schema.Types.String,
      required: false,
      min: 4
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
