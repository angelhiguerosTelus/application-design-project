const requestAPI = async (endpoint, options) => {
  const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`, options);
  const data = await res.json();
  return data;
};

const api = {
  list(offset) {
    return requestAPI(`pokemon?limit=100&offset=${offset}"`, {
      method: "GET",
    });
  },
  add(params) {
    return requestAPI(`/rooms/new`, {
      method: "POST",
      body: JSON.stringify(params),
    });
  },
};

export default api;
