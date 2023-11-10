const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// static assest
app.use(express.static("./methods-static"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);

app.use("/login", auth);

app.listen(4000, () => console.log(`Server is listening on port 4000...`));
