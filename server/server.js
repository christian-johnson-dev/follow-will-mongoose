const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config.js");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyShowRoutes = require("./routes/show.routes.js");
AllMyShowRoutes(app);

app.listen(port, () => {
  console.log("Listening at http://localhost:$(port)");
});
