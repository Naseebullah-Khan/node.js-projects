const express = require("express");
const app = express();
const { products } = require("./data");

// Homepage
app.get("/", (req, res) => {
  res.status(200).send("<h1>Homepage</h1><a href='/api/products'>Products</a>");
});

// Product Page
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.status(200).json(newProducts);
});

// Finding product by ID
app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });
  if (!singleProduct) {
    res.status(404).send(`Couldn't find the product you are searching for`);
  }
  res.json(singleProduct);
});

// complex example for route params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

// search by cahracter and show according to limit
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // return res.status(200).send(`No product matched your search`);
    return res.status(200).json({ sucess: true, Data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(4000, () => console.log(`Server is listening on port 4000`));
