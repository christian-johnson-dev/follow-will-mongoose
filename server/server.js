const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.get("/", (req, res) => {
  res.send("Hello Wurld!");
});

app.listen(port, () => {
  console.log("Listening at http://localhost:$(port)");
});
