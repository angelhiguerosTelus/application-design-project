const express = require("express");
const { getUser } = require("./src/bd/actionJson");
const app = express();

const { PORT } = require("./src/configs/server");

// Users
app.post("/user", (req, res) => {
  let { username, password } = req.body;

  let response = getUser(username, password);
  res.send({
    error: "",
    data: response,
  });
});

app.post("/user/add", (req, res) => {
  res.send("Hello World!");
});

app.put("/user", (req, res) => {
  res.send("Hello World!");
});

// Pokedex
app.post("/pokemon", (req, res) => {
  res.send("Hello World!");
});

app.post("/pokemon/list", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
