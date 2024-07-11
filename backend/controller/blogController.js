const express = require("express");
const { Blog } = require("../models/blogModel");
const fs = require("fs");
const path = require("path");
const { readFileAsync } = require("../utils/base64Converter");

async function getBlogs(req, res, next) {
  Blog.find().then(async (doc) => {
    const promises = doc.map(async (item) => {
      const base64data = await readFileAsync(item.imageName);
      return {
        title: item.title,
        description: item.description,
        fileData: base64data,
      };
    });
    const responseData = await Promise.all(promises);
    console.log("response Data:", responseData);
    res.json(responseData);
  });
}

function createBlog(req, res, next) {
  console.log(req.file.path);
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    imageName: req.fileName,
  });

  blog.save();

  res.json({ message: "Blog created" });
}

module.exports = {
  getBlogs,
  createBlog,
};
