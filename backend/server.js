const hostname = undefined;
const port = 4000;

const express = require("express");
const bodyParser = require("body-parser");
// const uuid = require('uuid/v4');
const { v4: uuidv4 } = require("uuid");
const mongodb = require("./models/mongodb");
const Product = require("./models/product");

const app = express();

const DUMMY_PRODUCTS = []; // not a database, just some in-memory storage for now

app.use(bodyParser.json());

mongodb.connectToDb();

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/products", async (req, res, next) => {
  // res.status(200).json({ products: DUMMY_PRODUCTS });
  const products = await getProducts();
  res.status(200).json({ products: products });
});

app.post("/product", async (req, res, next) => {
  const { title, price } = req.body;

  if (!title || title.trim().length === 0 || !price || price <= 0) {
    return res.status(422).json({
      message: "Invalid input, please enter a valid title and price.",
    });
  }

  const createdProduct = {
    id: uuidv4(),
    title,
    price,
  };

  // DUMMY_PRODUCTS.push(createdProduct);
  await insertProduct(createdProduct);

  res
    .status(201)
    .json({ message: "Created new product.", product: createdProduct });
});

app.listen(port, hostname, () => {
  console.log(`Server listening... ${hostname}:${port}`);
});

const getProducts = async () => {
  const products = await Product.find();
  return products;
};

const insertProduct = async (product) => {
  const newProduct = new Product(product);
  await newProduct.save();
};
