const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  joke: {
    type: String,
    required: [true, "Joke  is required"],
    maxlength: [140, "Joke Name Cannot be More than 140 Characters"],
    trim: true,
  },

  author: {
    type: String,
    maxlength: [10, "Author's name canot be more than 10 characters"],
  },
});

module.exports = mongoose.model("Joke", TodoSchema);
