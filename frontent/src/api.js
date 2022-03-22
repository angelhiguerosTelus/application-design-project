const requestPokemonAPI = async (endpoint, options) => {
	const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`, options)
	const data = await res.json()
	return data
}

const requestAPI = async (endpoint, options) => {
	const res = await fetch(`${endpoint}`, options)
	const data = await res.json()
	return data
}

const requestExternalAPI = async (endpoint, options) => {
	const res = await fetch(endpoint, options)
	const data = await res.json()
	return data
}

const api = {
	// Pokedex API
	list(offset) {
		return requestPokemonAPI(`pokemon?limit=100&offset=${offset}"`, {
			method: 'GET',
		})
	},
	getInfo(url) {
		return requestExternalAPI(url, {
			method: 'GET',
		})
	},

	// User
	login(params) {
		return requestAPI(`/user`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(params),
		})
	},
	singUp(params) {
		return requestAPI(`/user/add`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(params),
		})
	},
	update(params) {
		return requestAPI(`/user`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(params),
		})
	},

	// API
	addPokemon(pokemon) {
		return requestAPI(`/pokemon`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(pokemon),
		})
	},
	listPokemons(_uid) {
		return requestAPI(`/pokemon/${_uid}`)
	},
	getPokemon(_uid, pokemon) {
		return requestAPI(`/pokemon/${_uid}/${pokemon}`)
	},
}

export default api
