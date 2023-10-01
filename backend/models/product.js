const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
