require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

// MW
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Routes
app.use("api/projects", require("./routes/api"));

// Server
app.listen(PORT, () => {
  console.log("Server is on PORT " + PORT);
});
