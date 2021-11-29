const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger('dev'));

mongoose
  .connect("mongodb://127.0.0.1/first_db")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

const port = 5000;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists",
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message",
  });
});

app.listen(port, console.log(`Server running on port: ${port}`));

module.exports = app;
