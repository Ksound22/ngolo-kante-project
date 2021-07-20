const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

const dbConnection = require("./db/connect");

const jokeRoutes = require("./routes/jokes");

// Necessary middlewares
app.use(express.json());
app.use(cors());

dbConnection();

// app.get("/", (req, res) => {
//   res.send("Welcome to Ngolo Kante Facts");
// });

app.use("/api/v1", jokeRoutes);

// Serve static assets for deployment
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
