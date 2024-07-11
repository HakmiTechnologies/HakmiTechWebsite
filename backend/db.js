// db.js
const mongoose = require("mongoose");
require("dotenv").config(); // For loading environment variables

async function main() {
  try {
    await mongoose.connect(process.env.DB_URI).then(() => {
      console.log("Successfully connected to the database");
    });
  } catch (error) {
    console.error("Error connecting to the database");
    console.error(error);
  }
}

main();

module.exports = mongoose.connection;
