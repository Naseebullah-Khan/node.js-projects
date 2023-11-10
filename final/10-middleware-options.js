const express = require("express");
const app = express();
const morgan = require("morgan");
const middleware = require("./middleware");
const autorize = require("./autorize");

// app.use([middleware, autorize]);
// app.use(express.static("./static"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});

app.get("/api/products", (req, res) => {
  res.send(`<h1>Products</h1>`);
});

app.get("/api/items", (req, res) => {
  // console.log(req.user);
  res.send(`<h1>items</h1>`);
});
app.listen(4000, () => console.log(`Server is listening on port 4000`));
