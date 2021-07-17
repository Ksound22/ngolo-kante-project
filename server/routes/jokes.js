const express = require("express");
const router = express.Router();

const {
  getJokes,
  createJoke,
  getJoke,
  updateJoke,
  deleteJoke,
} = require("../controllers/jokes");

router.get("/jokes", getJokes);
router.post("/joke", createJoke);
router.get("/joke/:id", getJoke);
router.put("/joke/:id", updateJoke);
router.delete("/joke/:id", deleteJoke);

module.exports = router;
