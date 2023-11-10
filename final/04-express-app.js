// in order to send file to the get method first we need modual name path for absolute path
// we need to call methode resolve() for path
// app.use()-> setting up middleware
// express.static()-> build in middleware
// static asset-> it is a file that server does't have to change it
const express = require("express");
const app = express();
const path = require("path");

// Static asset
app.use(express.static("./static"));

// Homepage
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});
// About page
// app.get("/about.html", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./html/about.html"));
// });
// 404 page
app.all("*", (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "./static/404.html"));
});

// Server listening
app.listen(4000, () => {
  console.log("Server is listening on port 4000...");
});
