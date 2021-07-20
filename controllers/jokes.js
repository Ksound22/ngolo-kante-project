const Jokes = require("../models/Jokes");

// Get all todos
const getJokes = async (req, res) => {
  try {
    const jokes = await Jokes.find({});
    res.status(200).json({ message: "Here are the jokes: ", jokes });
  } catch (err) {
    res.status(500).json({ message: "Error getting jokes: ", err });
  }
};

// Create todos
const createJoke = async (req, res) => {
  try {
    const joke = await Jokes.create(req.body);
    res.status(201).json({ message: "Joke created: ", joke });
  } catch (err) {
    res.status(500).json({ message: "Error creating joke: ", err });
  }
};

// Get single todo
const getJoke = async (req, res) => {
  try {
    const joke = await Jokes.findById(req.params.id);

    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.status(200).json({ message: "Here is the joke: ", joke });
  } catch (err) {
    res.status(500).json({ message: "Error getting joke: ", err });
  }
};

// Update todo
const updateJoke = async (req, res) => {
  try {
    const joke = await Jokes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    res.status(200).json({ message: "Joke updated successfully", joke });
  } catch (err) {
    res.status(500).json({ message: "Error updating joke: ", err });
  }
};

// Delete joke
const deleteJoke = async (req, res) => {
  try {
    const joke = await Jokes.findByIdAndDelete(req.params.id);

    if (!joke) {
      return res
        .status(404)
        .json({ message: "Joke not found and so it can't be updated" });
    }

    res.status(200).json({ message: "Joke deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting joke: ", err });
  }
};

module.exports = {
  getJokes,
  createJoke,
  getJoke,
  updateJoke,
  deleteJoke,
};
