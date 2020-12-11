require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const axios = require("axios");
const cors = require("cors");
const compression = require("compression");

const PORT = process.env.PORT || 4000;
const app = express();

// Send every request to the React app
// Define any API routes before this runs
//
app.use(helmet());
app.use(logger("dev"));

app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(require("./routes/api.js"));

require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGODB_URI || process.env.URI;

app.get("/api/portfolio", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Portfolio");
    dbo
      .collection("Portfolio")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
  });
});
app.get("/api/skills", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Portfolio");
    dbo
      .collection("Skills")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
  });
});

app.get("/api/starred", (req, res) => {
  axios
    .get(
      `https://api.github.com/users/Adambear1/starred?page=1&per_page=5&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}/starred=true&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    .then((data) => {
      // console.log(data.data.items);
      console.log(data.data);
      res.json(data.data);
    });
});

// Heroku
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "./client/build")));
// }

// GCloud
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/index.html"));
// });
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
