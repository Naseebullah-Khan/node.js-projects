const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send(`<h1>Homepage</h1>`);
});
app.get("/about", logger, (req, res) => {
  res.send(`<h1>About Page</h1>`);
});
app.listen(4000, () => console.log(`Server is listening on port 4000`));
