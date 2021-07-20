const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

const dbConnection = require("./db/connect");

const jokeRoutes = require("./routes/jokes");

// Necessary middlewares
app.use(express.json());
app.use(cors());

dbConnection();

app.get("/", (req, res) => {
  res.send("Welcome to Ngolo Kante Facts");
});

app.use("/api/v1", jokeRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
