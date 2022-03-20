const requestAPI = async (endpoint, options) => {
	const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`, options)
	const data = await res.json()
	return data
}

const requestAPI2 = async (endpoint, options) => {
	const res = await fetch(endpoint, options)
	const data = await res.json()
	return data
}

const URL = ''

const api = {
	// Pokedex API
	list(offset) {
		return requestAPI(`pokemon?limit=100&offset=${offset}"`, {
			method: 'GET',
		})
	},
	getInfo(url) {
		return requestAPI2(url, {
			method: 'GET',
		})
	},

	// User
	login(body) {
		return requestAPI(`${URL}/user`, {
			method: 'POST',
			body,
		})
	},
	singUp(body) {
		return requestAPI(`${URL}/user/add`, {
			method: 'POST',
			body,
		})
	},
	updated(body) {
		return requestAPI(`${URL}/user`, {
			method: 'PUT',
			body,
		})
	},

	// API
	addPokemon(pokemon) {
		return requestAPI(`${URL}/pokemon`, {
			method: 'POST',
			body: pokemon,
		})
	},
	listPokemons(params) {
		return requestAPI(`${URL}/pokemon/list`, {
			method: 'POST',
			body: params,
		})
	},
}

export default api
