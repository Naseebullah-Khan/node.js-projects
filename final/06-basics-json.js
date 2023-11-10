// When it comes to express you will use one of the two following option
// 1.You will use it to set up API->(Application Programming Interface)
// 2.You will use it to set up templates with SSR->(Server Side Rendering)
// In http case:
// By API we mean: set up http interface to interact with our data
// Sending data using JSON
// JSON->JavaScript Object Notation
// Sending back our respond using res.json()
// Another flavor we have SSR: set up templates and send back entire HTML\CSS\JavaScript by using res.render()
const express = require("express");
const app = express();

const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(4000, () => {
  console.log("Serever is listening on port 4000....");
});
