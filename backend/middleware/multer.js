const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const { Blog } = require("../models/blogModel");
const { News } = require("../models/newsModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.objType == "blog") {
      cb(null, path.resolve(__dirname, "../public/BlogImages"));
    } else {
      cb(null, path.resolve(__dirname, "../public/NewsImages"));
    }
  },
  filename: async function (req, file, cb) {
    if (req.objType == "blog") {
      await Blog.countDocuments({})
        .then((count) => {
          fileType = file.mimetype.split("/")[1];
          fileName = `imageBlog_${count + 1}.${fileType}`;
          req.fileName = fileName;
          cb(null, fileName);
        })
        .catch((err) => {
          console.error("Error counting documents:", err);
        });
    } else {
      await News.countDocuments({})
        .then((count) => {
          fileType = file.mimetype.split("/")[1];
          fileName = `imageNews_${count + 1}.${fileType}`;
          req.fileName = fileName;

          cb(null, fileName);
        })
        .catch((err) => {
          console.error("Error counting documents:", err);
        });
    }
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
