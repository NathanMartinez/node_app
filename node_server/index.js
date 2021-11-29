const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const User = require("./user");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(
  "mongodb://127.0.0.1/first_db",
  (e) => console.log("connected"),
  (e) => console.error(e)
);

const port = 5000;

async function getUsers() {
  const users = await User.find({});
  return users;
}

async function addUser(data) {
  const user = await User.create(data);
  await user.save()
  return user;
}

app.get("/users", async function (req, res) {
  users = await getUsers();
  res.send(users);
});

app.post("/users", function (req, res) {
  addUser(req.body)
});

app.listen(port, console.log(`Server running on port: ${port}`));
