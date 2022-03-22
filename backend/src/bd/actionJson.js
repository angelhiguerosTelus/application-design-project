
const fs = require("fs");
var path = require("path");
var pathConfig = path.resolve(__dirname, "./config.json");
var pathPokedex = path.resolve(__dirname, "./pokedex.json");
var pathUsers = path.resolve(__dirname, "./users.json");

let config = {};
let users = [];
let pokedex = [];

const readFiles = () => {
  config = JSON.parse(fs.readFileSync(pathConfig));
  users = JSON.parse(fs.readFileSync(pathUsers));
  pokedex = JSON.parse(fs.readFileSync(pathPokedex));
};

const writeFiles = () => {
  let dataConfig = JSON.stringify(config);
  fs.writeFileSync(pathConfig, dataConfig);

  let dataUsers = JSON.stringify(users);
  fs.writeFileSync(pathUsers, dataUsers);

  let dataPokedex = JSON.stringify(pokedex);
  fs.writeFileSync(pathPokedex, dataPokedex);
};

//Config

const setUID = () => {
  readFiles();
  let uid = config._uid;
  let newID = config._uid + 1;
  config._uid = newID;
  writeFiles();
  return uid;
};

// Users
const getUser = (username, password) => {
  readFiles();
  let res = users.filter(
    (user) => username === user.username && password === user.password
  );

  if (res.length === 0) {
    return {
      error: "User not found",
      data: "",
    };
  } else {
    return {
      error: "",
      data: res[0],
    };
  }
};

const addUser = (
  name,
  username,
  password,
  region,
  gender,
  age,
  email,
  trainerclass
) => {
  readFiles();

  let res = users.filter((user) => username === user.username);

  if (res.length === 0) {
    let newUser = {
      _uid: setUID(),
      name: name,
      username: username,
      password: password,
      region: region,
      gender: gender,
      age: age,
      email: email,
      trainerclass: trainerclass,
    };

    users = [...users, { ...newUser }];

    writeFiles();
    return {
      error: "",
      data: newUser,
    };
  } else {
    return {
      error: "Username had been used by another account",
      data: "",
    };
  }
};

const updateUser = (
  _uid,
  name,
  username,
  password,
  region,
  gender,
  age,
  email,
  trainerclass
) => {
  readFiles();

  let res = users.filter((user) => _uid === user._uid);

  if (res.length === 0) {
    return {
      error: "User not found",
      data: "",
    };
  } else {
    let verifyUserName = users.filter(
      (user) => username === user.username && _uid !== user._uid
    );
    if (verifyUserName.length === 0) {
      let tempUsers = [];
      users.map((user) =>
        _uid === user._uid
          ? tempUsers.push({
              _uid: user._uid,
              name: name || user.name,
              username: username || user.username,
              password: password || user.password,
              region: region || user.region,
              gender: gender || user.gender,
              age: age || user.age,
              email: email || user.email,
              trainerclass: trainerclass || user.trainerclass,
            })
          : tempUsers.push(user)
      );

      users = tempUsers;

      writeFiles();
      res = users.filter((user) => _uid === user._uid);
      return {
        error: "",
        data: res[0],
      };
    } else {
      return {
        error: "Username had been used by another account",
        data: "",
      };
    }
  }
};

// Pokedex
const addPokemon = (_uid, pokemonId, nickname) => {
  readFiles();

  let res = pokedex.filter(
    (pokemon) => pokemon.pokemon === pokemonId && pokemon._uid === _uid
  );

  if (res.length === 0) {
    let newPokemon = {
      _uid,
      pokemon: pokemonId,
      nickname: nickname,
    };

    pokedex = [...pokedex, { ...newPokemon }];

    writeFiles();
    return {
      error: "",
      data: newPokemon,
    };
  } else {
    return {
      error: "The pokemon has been already added",
      data: "",
    };
  }
};

const listPokemon = (_uid) => {
  readFiles();

  let res = pokedex.filter((pokemon) => parseInt(_uid) === parseInt(pokemon._uid));
  console.log(res);
  return {
    error: "",
    data: res,
  };
};

const getPokemon = (_uid, pokemonId) => {
  readFiles();

  let res = pokedex.filter(
    (pokemon) => parseInt(_uid) === parseInt(pokemon._uid) && pokemonId === pokemon.pokemon
  );

  return {
    error: "",
    data: res,
  };
};

module.exports = {
  setUID,
  getUser,
  addUser,
  updateUser,
  addPokemon,
  listPokemon,
  getPokemon,
};
