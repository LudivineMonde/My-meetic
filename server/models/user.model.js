const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    surname: { type: String },
    birthdate: { type: Date },
    genre: { type: String },
    city: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    hobbies: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
