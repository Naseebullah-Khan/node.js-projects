const express = require("express");
const router = express.Router();

const {
  getPerson,
  addPerson,
  addPersonPostman,
  updatePerson,
  removePerson,
} = require("../controlers/people");

// router.get("/", getPerson);
// router.post("/", addPerson);
// router.post("/postman", addPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", removePerson);

router.route("/").get(getPerson).post(addPerson);
router.route("/postman").post(addPersonPostman);
router.route("/:id").put(updatePerson).delete(removePerson);

module.exports = router;
