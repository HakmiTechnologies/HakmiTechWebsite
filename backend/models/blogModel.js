const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },

  imageName: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
