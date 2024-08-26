require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.DB_URI;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connect;
