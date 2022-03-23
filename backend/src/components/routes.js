const components = require("./components");

const routes = (server) => {
  server.use("/api", components);
};

module.exports = routes;
