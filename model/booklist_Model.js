const mongoose = require("mongoose");

const BooKListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Provide Title of the Book"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Please Provide Author Name of the Book"],
      trim: true,
    },
    summary: {
      type: String,
      required: [true, "Please Provide Summary of the Book"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookList", BooKListSchema);
