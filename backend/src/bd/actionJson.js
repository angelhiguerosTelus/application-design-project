const fs = require('fs');

let bd = {}

fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    bd = users
    console.log(users);
});

// Users
export const getUser = (user) => {
    
}

export const addUser = (user) => {

}

export const updateUser = (user) => {

}


// Pokedex
export const addPokemon = (pokemon) => {

}

export const listPokemon = (params) => {

}
