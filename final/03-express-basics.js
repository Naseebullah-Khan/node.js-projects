// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// const app = require("express")();
const express = require("express");
const app = express();
// Homepage
app.get("/", (req, res) => {
  res.status(200).send("<h1>Homepage</h1>");
});
// About Page
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});
// 404 Page
app.all("*", (req, res) => {
  res.status(404).send("<h1>404<br>Not Found</h1>");
});
app.listen(4000, () => {
  console.log("Server is listening on port 4000...");
});
