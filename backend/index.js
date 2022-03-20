const express = require("express");
const app = express();

const { PORT } = require("./src/configs/server");

app.use('/', )

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
