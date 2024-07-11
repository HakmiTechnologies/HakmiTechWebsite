const express = require("express");
const { News } = require("../models/newsModel");
const fs = require("fs");
const path = require("path");
const { readFileAsync } = require("../utils/base64Converter");

async function getNews(req, res, next) {
  News.find().then(async (doc) => {
    const promises = doc.map(async (item) => {
      const base64data = await readFileAsync(item.imageName);
      return {
        id: item.id,
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

function createNews(req, res, next) {
  console.log(req.file.path);
  const news = new News({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    imageName: req.fileName,
  });

  news.save();

  res.json({ message: "Blog created" });
}

module.exports = {
  getNews,
  createNews,
};
