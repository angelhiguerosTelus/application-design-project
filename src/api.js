const requestAPI = async (endpoint, options) => {
  const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`, options);
  const data = await res.json();
  return data;
};

const requestAPI2 = async (endpoint, options) => {
    const res = await fetch(endpoint, options);
    const data = await res.json();
    return data;
  };
  

const api = {
  list(offset) {
    return requestAPI(`pokemon?limit=100&offset=${offset}"`, {
      method: "GET",
    });
  },
  getInfo(url) {
    return requestAPI2(url, {
      method: "GET",
    });
  },
  
};

export default api;
