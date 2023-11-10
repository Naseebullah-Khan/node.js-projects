const express = require("express");
const app = express();
let { people } = require("./data");

// static assest
app.use(express.static("./methods-static"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.send("<h1>Please provide Credential!</h1>");
  } else {
    return res.send(`<h1>Welcome ${name}!</h1>`);
  }
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  } else {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide Credential!" });
  }
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, data: [...people, name] });
  }
  res.status(400).json({ success: false, msg: "Please provide Credential!" });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "no such person exits!" });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPerson });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "no such person exits!" });
  }
  const newPerson = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPerson });
});

app.listen(4000, () => console.log(`Server is listening on port 4000...`));
