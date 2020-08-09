require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const axios = require("axios");
const cors = require("cors");
const compression = require("compression");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(helmet());
app.use(logger("dev"));

app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(require("./routes/api.js"));

require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var url = process.env.URI;

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
      // `https://api.github.com/users/adambear1`
    )
    .then((data) => {
      // console.log(data.data.items);
      console.log(data.data);
      res.json(data.data);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
