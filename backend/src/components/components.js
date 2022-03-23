const express = require("express");
const {
  getUser,
  addUser,
  updateUser,
  listPokemon,
  getPokemon,
  addPokemon,
} = require("../bd/actionJson");
const router = express.Router();

// Users
router.post("/user", (req, res) => {
  let { username, password } = req.body;

  let response = getUser(username, password);

  res.send(response);
});

router.post("/user/add", (req, res) => {
  let { name, username, password, region, gender, age, email, trainerclass } =
    req.body;

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

router.put("/user", (req, res) => {
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
router.get("/pokemon/:_uid", (req, res) => {
  let { _uid } = req.params;
  let response = listPokemon(_uid);
  res.send(response);
});

router.get("/pokemon/:_uid/:pokemon", (req, res) => {
  let { _uid, pokemon } = req.params;
  let response = getPokemon(_uid, pokemon);
  console.log(response);

  res.send(response);
});

router.post("/pokemon", (req, res) => {
  let { _uid, pokemon, nickname } = req.body;
  let response = addPokemon(_uid, pokemon, nickname);
  res.send(response);
});

module.exports = router;
