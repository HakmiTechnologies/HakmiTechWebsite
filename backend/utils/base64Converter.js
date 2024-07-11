const fs = require("fs");
const path = require("path");

const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile("public/" + filePath, (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        const base64data = Buffer.from(fileData).toString("base64");
        resolve(base64data);
      }
    });
  });
};

module.exports = { readFileAsync };
