const mongoose = require("mongoose");

const connectToDb = async () => {
  await mongoose.connect("mongodb://mongo:27017/testdatabase");
};

module.exports = {
  connectToDb,
};
