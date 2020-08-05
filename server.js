require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
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

app.get("/api", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
