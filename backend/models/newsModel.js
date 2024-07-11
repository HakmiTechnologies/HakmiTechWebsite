const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
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

const News = mongoose.model("News", newsSchema);

module.exports = { News };
