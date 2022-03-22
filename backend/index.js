const express = require("express");

const bodyParser = require("body-parser");
const {
  getUser,
  addUser,
  updateUser,
  listPokemon,
  addPokemon,
  getPokemon,
} = require("./src/bd/actionJson");

const app = express();

// Hanlde post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { PORT } = require("./src/configs/server");

// Users
app.post("/user", (req, res) => {
  let { username, password } = req.body;

  let response = getUser(username, password);

  res.send(response);
});

app.post("/user/add", (req, res) => {
  let { name, username, password, region, gender, age, email, trainerclass } =
    req.body;
  console.log(req.body)

  let response = addUser(
    name,
    username,
    password,
    region,
    gender,
    age,
    email,
    trainerclass
  );

  res.send(response);
});

app.put("/user", (req, res) => {
  let {
    _uid,
    name,
    username,
    password,
    region,
    gender,
    age,
    email,
    trainerclass,
  } = req.body;
  let response = updateUser(
    _uid,
    name,
    username,
    password,
    region,
    gender,
    age,
    email,
    trainerclass
  );
  res.send(response);
});

// Pokedex
app.get("/pokemon/:_uid", (req, res) => {
  let { _uid } = req.params;
  let response = listPokemon(_uid);
  res.send(response);
});

app.get("/pokemon/:_uid/:pokemon", (req, res) => {
  let { _uid, pokemon } = req.params;
  let response = getPokemon(_uid, pokemon);
  res.send(response);
});

app.post("/pokemon", (req, res) => {
  let { _uid, pokemon, nickname } = req.body;
  let response = addPokemon(_uid, pokemon, nickname);
  res.send(response);

});

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
