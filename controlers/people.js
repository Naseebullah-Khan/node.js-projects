let { people } = require("../data");

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const addPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  } else {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide Credential!" });
  }
};

const addPersonPostman = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, data: [...people, name] });
  }
  res.status(400).json({ success: false, msg: "Please provide Credential!" });
};

const updatePerson = (req, res) => {
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
};

const removePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "no such person exits!" });
  }
  const newPerson = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPerson });
};

module.exports = {
  getPerson,
  addPerson,
  addPersonPostman,
  updatePerson,
  removePerson,
};
