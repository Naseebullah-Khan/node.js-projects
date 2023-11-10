const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.send("<h1>Please provide Credential!</h1>");
  } else {
    return res.send(`<h1>Welcome ${name}!</h1>`);
  }
});

module.exports = router;
